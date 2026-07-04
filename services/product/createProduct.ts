import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function createProduct(data: {
  title: string;
  price: number;
}) {
  try {
    console.log("🔥 SENDING TO FIRESTORE:", data);

    const docRef = await addDoc(collection(db, "products"), {
      title: data.title,
      price: data.price,
      createdAt: serverTimestamp(),
    });

    console.log("✅ PRODUCT CREATED ID:", docRef.id);

    return docRef.id;
  } catch (error) {
    console.error("❌ FIREBASE ERROR:", error);
  }
}
