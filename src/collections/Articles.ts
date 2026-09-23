import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { isAdminOrEditor, publishedOrAuthenticated } from "../access";
import { blockCatalog } from "../blocks";
import { publishAtField } from "../fields/publishAt";
import { slugField } from "../fields/slugField";
import { seoFields } from "../fields/seo";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "publishAt", "updatedAt"],
    description: "Articles and blog posts.",
    preview: (doc) => {
      if (doc?.slug) {
        return `/blog/${doc.slug}?preview=true`;
      }
      return null;
    },
    livePreview: {
      url: ({ data }) => {
        const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001";
        return `${serverURL}/blog/${data?.slug || ""}?preview=true`;
      },
    },
  },
  versions: {
    drafts: {
      autosave: false,
    },
  },
  access: {
    read: publishedOrAuthenticated,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: { description: "Article title." },
    },
    slugField(),
    {
      name: "excerpt",
      type: "textarea",
      admin: { description: "Short summary snippet for listings and search previews." },
    },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "layout",
      type: "blocks",
      blocks: blockCatalog,
      admin: { description: "Optional additional layout sections." },
    },
    {
      name: "coverImage",
      type: "relationship",
      relationTo: "media",
      admin: { position: "sidebar" },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: { position: "sidebar" },
    },
    {
      name: "primaryCategory",
      type: "relationship",
      relationTo: "categories",
      admin: { position: "sidebar" },
    },
    {
      name: "additionalCategories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: { position: "sidebar" },
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: { position: "sidebar" },
    },
    publishAtField,
    ...seoFields(),
  ],
};
