"use client";

import { useState } from "react";
import { createProduct } from "@/services/product/createProduct";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit() {
    await createProduct({
      title,
      price: Number(price),
    });

    alert("محصول ثبت شد");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>
        ثبت محصول
      </button>
    </div>
  );
}
