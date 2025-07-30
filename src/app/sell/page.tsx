"use client";
import React, { useState } from "react";
import Image from "next/image";

const initialForm = {
  title: "",
  description: "",
  price: "",
  quantity: "",
  category_id: "",
  product_image: "",
};

const categories = [
  { id: 1, name: "Jewelry" },
  { id: 2, name: "Pottery" },
  { id: 3, name: "Textiles" },
  { id: 4, name: "Woodwork" },
  { id: 5, name: "Paintings" },
  { id: 6, name: "Leather Goods" },
];

const SellForm = () => {
  const [form, setForm] = useState(initialForm);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as any;
    if (name === "product_image" && files && files[0]) {
      setForm({ ...form, product_image: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (API call)
    alert("Product submitted! (Demo only)");
  };

  return (
    <div className="flex ">
      <Image
        src={"/hero.jpg"}
        alt="an image is here displaying any project"
        width={1000}
        height={1000}
      />
      <div className="max-w-xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sell Your Handcrafted Item
        </h1>
        <form
          className="space-y-6 bg-white p-6 rounded-xl shadow"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Price ($)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                min="1"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Product Image</label>
            <input
              type="file"
              name="product_image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded h-32 object-cover"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-violet-2)] text-white font-bold py-2 cursor-pointer rounded hover:opacity-100 opacity-80 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellForm;
