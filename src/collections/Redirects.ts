import type { CollectionConfig } from "payload";
import { isAdminOrEditor } from "../access";

export const Redirects: CollectionConfig = {
  slug: "redirects",
  admin: {
    useAsTitle: "fromUrl",
    defaultColumns: ["fromUrl", "toUrl", "statusCode"],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: "fromUrl",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "Source URL path (e.g. /old-path)" },
    },
    {
      name: "toUrl",
      type: "text",
      required: true,
      admin: { description: "Target URL destination (e.g. /new-path)" },
    },
    {
      name: "statusCode",
      type: "select",
      defaultValue: "301",
      options: [
        { label: "301 Moved Permanently", value: "301" },
        { label: "302 Found (Temporary)", value: "302" },
        { label: "307 Temporary Redirect", value: "307" },
        { label: "410 Gone", value: "410" },
      ],
    },
  ],
};
