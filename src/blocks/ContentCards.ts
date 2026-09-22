import type { Block } from "payload";

export const ContentCards: Block = {
  slug: "contentCards",
  labels: { singular: "Content Cards", plural: "Content Cards Grids" },
  fields: [
    { name: "sectionTitle", type: "text" },
    {
      name: "cards",
      type: "array",
      required: true,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "image", type: "relationship", relationTo: "media" },
        { name: "link", type: "text" },
      ],
    },
  ],
};
