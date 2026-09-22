import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Tags } from "./collections/Tags";
import { Articles } from "./collections/Articles";
import { Pages } from "./collections/Pages";
import { Redirects } from "./collections/Redirects";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseURI = process.env.DATABASE_URI || "postgresql://postgres:postgres@localhost:5433/nero_prototype_dev";
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001";

export default buildConfig({
  serverURL,
  secret: process.env.PAYLOAD_SECRET || "super-secret-payload-key-change-in-prod-32chars",
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: databaseURI,
    },
  }),
  collections: [
    Users,
    Media,
    Categories,
    Tags,
    Articles,
    Pages,
    Redirects,
  ],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
