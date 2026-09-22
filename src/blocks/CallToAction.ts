import type { Block } from "payload";

export const CallToAction: Block = {
  slug: "callToAction",
  labels: { singular: "Call to Action", plural: "Call to Action Banners" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "text", type: "textarea" },
    { name: "primaryButtonText", type: "text" },
    { name: "primaryButtonLink", type: "text" },
  ],
};
