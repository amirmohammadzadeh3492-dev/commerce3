import { getProducts } from "@/services/product/getProducts";

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((p: any) => (
        <div key={p.id}>
          {p.title} - {p.price}
        </div>
      ))}
    </div>
  );
}
