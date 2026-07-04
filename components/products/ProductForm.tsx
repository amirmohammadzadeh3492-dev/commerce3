"use client";

import { useState } from "react";
import { createProduct } from "@/services/product/createProduct";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    await createProduct({
      title,
      price: Number(price),
    });

    alert("محصول ثبت شد");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />

      <button onClick={handleSubmit}>
        ثبت محصول
      </button>
    </div>
  );
}
