import type { Block } from "payload";

export const Hero: Block = {
  slug: "hero",
  labels: { singular: "Hero Banner", plural: "Hero Banners" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea" },
    { name: "image", type: "relationship", relationTo: "media" },
    { name: "ctaText", type: "text", label: "Button Label" },
    { name: "ctaLink", type: "text", label: "Button Destination URL" },
  ],
};
