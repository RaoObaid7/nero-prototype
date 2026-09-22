import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import config from "@/payload.config";
import { importMap } from "@/app/(payload)/admin/importMap";

type Args = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config, params, searchParams });

export default async function Page({ params, searchParams }: Args) {
  return RootPage({ config, params: params as any, searchParams, importMap });
}
