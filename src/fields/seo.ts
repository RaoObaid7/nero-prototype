import type { Field } from "payload";

export function seoFields(): Field[] {
  return [
    {
      name: "meta",
      type: "group",
      label: "SEO & Social Metadata",
      admin: {
        description: "Controls search engine meta tags, preview snippets, and social sharing cards.",
      },
      fields: [
        {
          name: "title",
          type: "text",
          admin: { description: "Custom SEO title tag. Defaults to article/page title." },
        },
        {
          name: "description",
          type: "textarea",
          admin: { description: "Meta description snippet shown in search results." },
        },
        {
          name: "ogImage",
          type: "relationship",
          relationTo: "media",
          admin: { description: "Social share card preview image." },
        },
        {
          name: "noindex",
          type: "checkbox",
          defaultValue: false,
          admin: { description: "Instruct search engines NOT to index this page." },
        },
        {
          name: "canonicalUrl",
          type: "text",
          admin: { description: "Optional explicit canonical URL override." },
        },
      ],
    },
  ];
}
