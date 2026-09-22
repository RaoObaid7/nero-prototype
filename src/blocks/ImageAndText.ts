import type { Block } from "payload";

export const ImageAndText: Block = {
  slug: "imageAndText",
  labels: { singular: "Image + Text", plural: "Image + Text Sections" },
  fields: [
    { name: "heading", type: "text" },
    { name: "body", type: "textarea", required: true },
    { name: "image", type: "relationship", relationTo: "media", required: true },
    {
      name: "imagePosition",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      defaultValue: "left",
    },
  ],
};
