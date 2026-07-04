import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getProducts() {
  const snap = await getDocs(collection(db, "products"));

  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}
