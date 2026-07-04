import { turso } from "@/lib/turso";

export async function POST(req: Request) {
  const body = await req.json();

  const id = crypto.randomUUID();

  await turso.execute({
    sql: "INSERT INTO products (id, title, price) VALUES (?, ?, ?)",
    args: [id, body.title, body.price],
  });

  return Response.json({ id });
}
