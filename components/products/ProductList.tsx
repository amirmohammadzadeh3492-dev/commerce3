"use client";

export default function ProductList({ products }: any) {
  return (
    <div>
      {products.map((p: any) => (
        <div key={p.id}>
          {p.title} - {p.price}
        </div>
      ))}
    </div>
  );
}
