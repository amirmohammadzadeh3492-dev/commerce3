"use client";

import { useState } from "react";
import { createProduct } from "@/services/product/createProduct";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !price) return alert("فیلدها خالی است");

    try {
      setLoading(true);

      console.log("CLICKED");

      await createProduct({
        title,
        price: Number(price),
      });

      alert("محصول ثبت شد");

      setTitle("");
      setPrice("");
    } catch (e) {
      console.error(e);
      alert("خطا در ثبت محصول");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "در حال ثبت..." : "ثبت محصول"}
      </button>
    </div>
  );
}
