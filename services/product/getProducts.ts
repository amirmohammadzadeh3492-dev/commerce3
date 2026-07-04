import { turso } from "@/lib/turso";

export async function getProducts() {
  const result = await turso.execute(
    "SELECT * FROM products ORDER BY created_at DESC"
  );

  return result.rows;
}
