import { redirect } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const collection = searchParams.get("collection") || "articles";

  const previewSecret = process.env.PREVIEW_SECRET || "preview-secret-key-32-chars-minimum-length";
  if (secret && secret !== previewSecret) {
    return new Response("Invalid preview token", { status: 401 });
  }

  if (!slug) {
    return new Response("Missing slug", { status: 400 });
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

  try {
    const draft = await draftMode();
    draft.enable();
  } catch {
    // Graceful fallback
  }

  redirect(collection === "articles" ? `/blog/${slug}?preview=true` : `/${slug}?preview=true`);
}

