import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function BlogIndexPage() {
  const payload = await getPayload({ config: configPromise });

  const { docs: articles } = await payload.find({
    collection: "articles",
    where: { _status: { equals: "published" } },
    sort: "-createdAt",
    depth: 2,
  });

  return (
    <div style={{ paddingBottom: "5rem" }}>
      <div className="section-header" style={{ marginBottom: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
            Articles & News
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Explore editorial dispatches, architecture guides, and platform updates.
          </p>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="empty-editorial-card" style={{ marginTop: "3rem" }}>
          <h3 className="empty-title">No published articles yet</h3>
          <p className="empty-text">Publish an article in the CMS Studio to see it listed here.</p>
          <Link href="/admin" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Open CMS Studio ↗
          </Link>
        </div>
      ) : (
        <div className="articles-grid">
          {articles.map((art: any) => {
            const coverImage = typeof art.coverImage === "object" && art.coverImage !== null ? art.coverImage : null;
            const coverUrl = coverImage?.url || null;
            const categoryName = typeof art.primaryCategory === "object" && art.primaryCategory !== null
              ? art.primaryCategory.name
              : null;
            const authorName = typeof art.author === "object" && art.author !== null
              ? art.author.name || art.author.email
              : null;

            return (
              <Link key={art.id} href={`/blog/${art.slug}`} className="article-card">
                <div className="article-card-thumb-wrapper">
                  {coverUrl ? (
                    <img
                      src={coverUrl}
                      alt={art.title}
                      className="article-card-thumb"
                    />
                  ) : (
                    <div className="article-card-placeholder">
                      <span>Article Dispatch</span>
                    </div>
                  )}
                </div>

                <div className="article-card-content">
                  <div className="article-card-meta">
                    <span className="card-badge">{categoryName || "Article"}</span>
                    <time className="card-date">
                      {new Date(art.publishedAt || art.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="article-card-title">{art.title}</h3>

                  <p className="article-card-excerpt">
                    {art.excerpt || "Read full article dispatch..."}
                  </p>

                  <div className="article-card-footer">
                    <span className="article-card-author">
                      {authorName ? `By ${authorName}` : "NERO Editorial"}
                    </span>
                    <span className="article-card-read-action">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

