import type { CollectionConfig } from "payload";
import { isAdminOrEditor } from "../access";
import { slugField } from "../fields/slugField";

export const Categories: CollectionConfig = {
  slug: "categories",
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
    { name: "description", type: "textarea" },
  ],
};
