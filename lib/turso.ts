import { createClient } from "@libsql/client";

export const turso = createClient({
  url:libsql://commerce-db-amirmohammadzadeh3492-dev.aws-eu-west-1.turso.io,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});
