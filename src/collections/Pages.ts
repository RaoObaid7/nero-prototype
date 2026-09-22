import type { CollectionConfig } from "payload";
import { isAdminOrEditor, publishedOrAuthenticated } from "../access";
import { blockCatalog } from "../blocks";
import { publishAtField } from "../fields/publishAt";
import { slugField } from "../fields/slugField";
import { seoFields } from "../fields/seo";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    description: "Custom site landing pages and institutional pages.",
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
    { name: "title", type: "text", required: true },
    slugField(),
    {
      name: "layout",
      type: "blocks",
      blocks: blockCatalog,
      required: true,
      admin: { description: "Assemble page layout using ordered content blocks." },
    },
    publishAtField,
    ...seoFields(),
  ],
};
