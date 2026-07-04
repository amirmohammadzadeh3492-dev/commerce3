import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function createProduct(data: {
  title: string;
  price: number;
}) {
  console.log("🔥 START CREATE PRODUCT");

  try {
    console.log("🔥 DATA:", data);

    const ref = await addDoc(collection(db, "products"), {
      title: data.title,
      price: data.price,
      createdAt: serverTimestamp(),
    });

    console.log("✅ SUCCESS ID:", ref.id);

    return ref.id;
  } catch (error: any) {
    console.error("❌ FIREBASE ERROR FULL:", error);
    console.error("❌ ERROR CODE:", error?.code);
    console.error("❌ ERROR MESSAGE:", error?.message);
  }

  console.log("🔥 END CREATE PRODUCT");
}
