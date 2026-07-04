import { turso } from "@/lib/turso";

export async function createProduct(data: {
  title: string;
  price: number;
}) {
  const id = crypto.randomUUID();

  console.log("🔥 INSERT:", data);

  await turso.execute({
    sql: "INSERT INTO products (id, title, price) VALUES (?, ?, ?)",
    args: [id, data.title, data.price],
  });

  return id;
}
