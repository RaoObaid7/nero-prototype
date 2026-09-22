import { redirect } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const collection = searchParams.get("collection") || "articles";

  if (secret !== process.env.PREVIEW_SECRET || !slug) {
    return new Response("Invalid preview token or missing slug", { status: 401 });
  }

  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: collection as any,
    where: { slug: { equals: slug } },
    draft: true,
    limit: 1,
  });

  if (!docs[0]) {
    return new Response("Document not found", { status: 404 });
  }

  redirect(collection === "articles" ? `/blog/${slug}` : `/${slug}`);
}
