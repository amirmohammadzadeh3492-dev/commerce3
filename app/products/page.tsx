import { getProducts } from "@/services/product/getProducts";
import ProductList from "@/components/products/ProductList";

export default async function Page() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
