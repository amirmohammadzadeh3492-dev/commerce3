"use client";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function createProduct(data: {
  title: string;
  price: number;
}) {
  return await addDoc(collection(db, "products"), {
    title: data.title,
    price: data.price,
    createdAt: serverTimestamp(),
  });
}
