import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function sitemap() {
  const payload = await getPayload({ config: configPromise });
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001";

  const { docs: articles } = await payload.find({
    collection: "articles",
    where: { _status: { equals: "published" } },
    limit: 1000,
  });

  const articleEntries = articles.map((art: any) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: art.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...articleEntries,
  ];
}
