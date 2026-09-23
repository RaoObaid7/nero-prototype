import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { BlockRenderer } from "@/components/BlockRenderer";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: "articles",
    where: {
      slug: { equals: slug },
    },
    draft: true,
    limit: 1,
  });

  const article: any = docs[0];
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.title,
    "datePublished": article.createdAt,
    "dateModified": article.updatedAt,
  };

  return (
    <article style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{article.title}</h1>
      {article.excerpt && (
        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          {article.excerpt}
        </p>
      )}

      {article.body && (
        <div className="article-body" style={{ marginBottom: "2rem" }}>
          <RichText data={article.body} />
        </div>
      )}

      {article.layout?.map((block: any, idx: number) => (
        <BlockRenderer key={idx} block={block} />
      ))}
    </article>
  );
}
