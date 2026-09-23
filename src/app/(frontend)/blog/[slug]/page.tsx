import { notFound } from "next/navigation";
import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { BlockRenderer } from "@/components/BlockRenderer";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { draftMode } from "next/headers";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ preview?: string }>;
}

export default async function ArticleDetailPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = searchParams ? await searchParams : {};
  const isPreview = sParams.preview === "true";

  let isDraft = false;
  try {
    const draft = await draftMode();
    isDraft = draft.isEnabled || isPreview;
  } catch {
    isDraft = isPreview;
  }

  const payload = await getPayload({ config: configPromise });

  // Query published first (or drafts if preview mode active)
  const { docs } = await payload.find({
    collection: "articles",
    where: {
      slug: { equals: slug },
      ...(isDraft ? {} : { _status: { equals: "published" } }),
    },
    draft: isDraft,
    depth: 2,
    limit: 1,
  });

  let article: any = docs[0];

  // Fallback: If not found as published, allow fallback for draft preview
  if (!article) {
    const { docs: draftDocs } = await payload.find({
      collection: "articles",
      where: { slug: { equals: slug } },
      draft: true,
      depth: 2,
      limit: 1,
    });
    if (draftDocs[0]) {
      article = draftDocs[0];
    }
  }

  if (!article) notFound();

  const coverImage = typeof article.coverImage === "object" && article.coverImage !== null ? article.coverImage : null;
  const coverImageUrl = coverImage?.url || null;
  const coverImageAlt = coverImage?.alt || article.title;
  const coverImageCaption = coverImage?.caption || null;

  const authorName = typeof article.author === "object" && article.author !== null
    ? article.author.name || article.author.email
    : null;

  const categoryName = typeof article.primaryCategory === "object" && article.primaryCategory !== null
    ? article.primaryCategory.name
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || article.title,
    image: coverImageUrl ? [coverImageUrl] : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    author: authorName ? [{ "@type": "Person", name: authorName }] : undefined,
  };

  return (
    <article className="article-detail-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="article-back-link">
        ← Back to all articles
      </Link>

      <header className="article-header">
        <div className="article-meta-top">
          {categoryName && (
            <span className="card-badge">{categoryName}</span>
          )}
          <time className="card-date">
            {new Date(article.publishedAt || article.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="article-headline">{article.title}</h1>

        {article.excerpt && (
          <p className="article-lead-excerpt">
            {article.excerpt}
          </p>
        )}

        {authorName && (
          <div className="article-byline">
            <span>Written by <strong className="article-author-name">{authorName}</strong></span>
            <span className="article-meta-dot">·</span>
            <span>NERO Dispatch</span>
          </div>
        )}
      </header>

      {/* Featured Cover Image */}
      {coverImageUrl && (
        <figure className="article-hero-cover-container">
          <img
            src={coverImageUrl}
            alt={coverImageAlt}
            className="article-hero-cover-img"
          />
          {coverImageCaption && (
            <figcaption className="article-hero-cover-caption">
              {coverImageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Rich Text Body with embedded paragraphs, headings, blockquotes & images */}
      {article.body && (
        <div className="article-body">
          <RichText data={article.body} />
        </div>
      )}

      {/* Optional Block Layout Sections */}
      {article.layout && article.layout.length > 0 && (
        <div className="article-layout-blocks">
          {article.layout.map((block: any, idx: number) => (
            <BlockRenderer key={idx} block={block} />
          ))}
        </div>
      )}

      {/* Article Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="article-tags-wrapper">
          <span className="article-tags-label">Tags:</span>
          <div className="article-tags-list">
            {article.tags.map((tag: any, idx: number) => {
              const tagName = typeof tag === "object" && tag !== null ? tag.name : tag;
              return <span key={idx} className="article-tag-pill">#{tagName}</span>;
            })}
          </div>
        </div>
      )}
    </article>
  );
}

