import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { BlockRenderer } from "@/components/BlockRenderer";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch published articles
  const { docs: articles } = await payload.find({
    collection: "articles",
    where: { _status: { equals: "published" } },
    limit: 6,
  });

  return (
    <div>
      <section className="block-hero">
        <h1>Welcome to NERO CMS Prototype</h1>
        <p className="lead">
          A high-performance, modular content platform built with Payload CMS v3 & Next.js App Router.
        </p>
        <Link href="/admin" className="btn primary">Open CMS Admin Panel</Link>
      </section>

      <section style={{ margin: "3rem 0" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Latest Published Articles</h2>
        {articles.length === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>
            No published articles yet. Log into the <Link href="/admin" style={{ color: "var(--accent)" }}>Admin Panel</Link> to create your first article!
          </p>
        ) : (
          <div className="articles-grid">
            {articles.map((art: any) => (
              <Link key={art.id} href={`/blog/${art.slug}`} className="article-card">
                <h3>{art.title}</h3>
                <p>{art.excerpt || "Click to read full article..."}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
