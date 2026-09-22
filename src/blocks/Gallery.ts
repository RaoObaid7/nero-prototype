import type { Block } from "payload";

export const Gallery: Block = {
  slug: "gallery",
  labels: { singular: "Gallery", plural: "Galleries" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "images",
      type: "array",
      required: true,
      fields: [
        { name: "image", type: "relationship", relationTo: "media", required: true },
        { name: "caption", type: "text" },
      ],
    },
  ],
};
