import type { Field } from "payload";

export function slugField(): Field {
  return {
    name: "slug",
    type: "text",
    required: true,
    unique: true,
    index: true,
    admin: {
      position: "sidebar",
      description: "URL path segment. Auto-generated from title, locked once published.",
    },
    hooks: {
      beforeValidate: [
        ({ value, data, operation }) => {
          if (typeof value === "string" && value.trim().length > 0) {
            return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          }
          if ((operation === "create" || !value) && data?.title && typeof data.title === "string") {
            return data.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          }
          return value;
        },
      ],
    },
  };
}
