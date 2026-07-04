import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function getProducts() {
  const snap = await getDocs(collection(db, "products"));

  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>محصولات</h1>

      {products.map((p: any) => (
        <div key={p.id}>
          {p.title} - {p.price}
        </div>
      ))}
    </div>
  );
}
