import type { CollectionConfig } from "payload";
import { isAdminOrEditor } from "../access";
import { slugField } from "../fields/slugField";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: { useAsTitle: "title" },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "title", type: "text", required: true },
    slugField(),
  ],
};
