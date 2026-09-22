import type { Block } from "payload";

export const Callout: Block = {
  slug: "callout",
  labels: { singular: "Callout / Quote", plural: "Callouts" },
  fields: [
    {
      name: "type",
      type: "select",
      options: [
        { label: "Quotation", value: "quote" },
        { label: "Information Note", value: "info" },
      ],
      defaultValue: "info",
    },
    { name: "content", type: "textarea", required: true },
    { name: "attribution", type: "text", admin: { condition: (_, siblingData) => siblingData?.type === "quote" } },
  ],
};
