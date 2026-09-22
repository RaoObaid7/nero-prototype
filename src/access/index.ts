import type { Access, FieldAccess } from "payload";

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user && user.role === "admin");
};

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return Boolean(user && (user.role === "admin" || user.role === "editor"));
};

export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true;
  return {
    _status: {
      equals: "published",
    },
  };
};

export const isAdminField: FieldAccess = ({ req: { user } }) => {
  return Boolean(user && user.role === "admin");
};
