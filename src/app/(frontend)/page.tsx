import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });

  let articles: any[] = [];
  try {
    const result = await payload.find({
      collection: "articles",
      where: { _status: { equals: "published" } },
      limit: 6,
      sort: "-createdAt",
    });
    articles = result.docs;
  } catch {
    // Graceful fallback if database tables are initializing
  }

  const catalogBlocks = [
    { slug: "hero", name: "Hero Banner", desc: "Top-of-page focal banner with headline, lead, and high-contrast CTA." },
    { slug: "richText", name: "Rich Text", desc: "Lexical editorial prose with headings, links, quotes, and inline code." },
    { slug: "imageText", name: "Image & Text", desc: "Constrained two-column split pairing photography with descriptive copy." },
    { slug: "gallery", name: "Media Gallery", desc: "Ordered multi-image collection with curated caption typography." },
    { slug: "callout", name: "Callout & Quote", desc: "Highlighted editorial notes and verified quotes with author attribution." },
    { slug: "contentCards", name: "Content Cards", desc: "Curated grid of linked recommendations, guides, or destinations." },
    { slug: "faq", name: "FAQ Accordion", desc: "Accessible disclosure questions and answers for practical travel advice." },
    { slug: "cta", name: "Call To Action", desc: "Conversion band with primary and secondary destination actions." },
  ];

  return (
    <div className="home-surface">
      {/* Editorial Opening */}
      <section className="editorial-hero">
        <div className="hero-content">
          <h1 className="hero-headline">
            Editorial clarity for conscious travel.
          </h1>
          <p className="hero-lead">
            The publishing engine for TUYBA — pairing the autonomous ease of WordPress block workflows with Next.js 15 performance and zero draft leakage.
          </p>

          <div className="hero-actions">
            <Link
              href="/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open CMS Studio ↗
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              Browse Articles
            </Link>
          </div>

          <div className="hero-runtime-bar">
            <span className="runtime-metric">
              <span className="metric-dot" /> Database: Local PostgreSQL 16
            </span>
            <span className="runtime-divider">·</span>
            <span className="runtime-metric">Status: Published Seam Active</span>
            <span className="runtime-divider">·</span>
            <span className="runtime-metric">Engine: Payload v3.89</span>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-published">
        <div className="section-header">
          <div>
            <h2 className="section-title">Latest Published Dispatches</h2>
            <p className="section-subtitle">
              Live articles retrieved from the published-only database seam.
            </p>
          </div>
          <Link href="/blog" className="section-more-link">
            All Articles →
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="empty-editorial-card">
            <h3 className="empty-title">No published dispatches yet</h3>
            <p className="empty-text">
              Log into the CMS Admin Studio to compose and publish your first article. Drafts remain hidden until published.
            </p>
            <Link
              href="/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Compose in CMS Studio ↗
            </Link>
          </div>
        ) : (
          <div className="magazine-grid">
            {articles.map((art: any) => {
              const coverUrl = typeof art.coverImage === "object" && art.coverImage !== null ? art.coverImage.url : null;
              return (
                <Link
                  key={art.id}
                  href={`/blog/${art.slug}`}
                  className="magazine-card"
                  style={{ padding: coverUrl ? 0 : "1.75rem", overflow: "hidden" }}
                >
                  {coverUrl && (
                    <div className="article-card-thumb-wrapper" style={{ height: "180px" }}>
                      <img src={coverUrl} alt={art.title} className="article-card-thumb" />
                    </div>
                  )}
                  <div style={{ padding: coverUrl ? "1.5rem" : 0, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                    <div>
                      <div className="magazine-card-meta">
                        <span className="card-badge">Article</span>
                        <time className="card-date">
                          {new Date(art.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="magazine-card-title">{art.title}</h3>
                      <p className="magazine-card-excerpt">
                        {art.excerpt || "Read full travel guide and dispatch..."}
                      </p>
                    </div>
                    <span className="card-read-action">Read Dispatch →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* 8-Block Catalog Explorer */}
      <section className="section-catalog">
        <div className="section-header">
          <div>
            <h2 className="section-title">The 8-Block Publishing Catalog</h2>
            <p className="section-subtitle">
              Sprint 2 block contract: editors assemble rich pages without code; unknown blocks log and skip safely.
            </p>
          </div>
        </div>

        <div className="catalog-grid">
          {catalogBlocks.map((block) => (
            <div key={block.slug} className="catalog-block-card">
              <div className="block-card-header">
                <code className="block-slug">layout.{block.slug}</code>
              </div>
              <h4 className="block-name">{block.name}</h4>
              <p className="block-desc">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Principles Callout */}
      <section className="section-guarantees">
        <div className="guarantee-card">
          <h3 className="guarantee-title">Zero Draft Leakage</h3>
          <p className="guarantee-desc">
            Public visitor routes strictly resolve published content. Drafts, scheduled releases, and revisions remain completely inaccessible to unauthenticated traffic.
          </p>
        </div>

        <div className="guarantee-card">
          <h3 className="guarantee-title">Automatic SEO & Schema</h3>
          <p className="guarantee-desc">
            Every published guide generates canonical links, robots directives, OpenGraph cards, and Schema.org Article JSON-LD for instant search indexation.
          </p>
        </div>

        <div className="guarantee-card">
          <h3 className="guarantee-title">Scheduled Release Worker</h3>
          <p className="guarantee-desc">
            Articles with a future <code>publishAt</code> timestamp automatically transition from draft to published when their designated release window arrives.
          </p>
        </div>
      </section>
    </div>
  );
}
