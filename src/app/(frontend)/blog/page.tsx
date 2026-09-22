import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function BlogIndexPage() {
  const payload = await getPayload({ config: configPromise });
  
  const { docs: articles } = await payload.find({
    collection: "articles",
    where: { _status: { equals: "published" } },
    sort: "-createdAt",
  });

  return (
    <div>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Articles & News</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Explore all published content from the CMS.</p>

      {articles.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>No published articles available.</p>
      ) : (
        <div className="articles-grid">
          {articles.map((art: any) => (
            <Link key={art.id} href={`/blog/${art.slug}`} className="article-card">
              <h3>{art.title}</h3>
              <p>{art.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
