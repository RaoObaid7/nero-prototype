import type { Block } from "payload";

export const FAQ: Block = {
  slug: "faq",
  labels: { singular: "FAQ Accordion", plural: "FAQ Sections" },
  fields: [
    { name: "heading", type: "text", defaultValue: "Frequently Asked Questions" },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
  ],
};
