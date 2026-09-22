import type { Field } from "payload";

export const publishAtField: Field = {
  name: "publishAt",
  type: "date",
  admin: {
    position: "sidebar",
    date: {
      pickerAppearance: "dayAndTime",
    },
    description: "Optional publication schedule time. Stays in draft until this date arrives.",
  },
};
