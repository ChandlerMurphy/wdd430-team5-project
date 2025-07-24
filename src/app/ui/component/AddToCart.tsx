"use client";
import React, { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-secondary rounded px-2 py-1 shadow">
        <button
          className="px-2 py-1 rounded hover:bg-[var(--primary-violet-2)] hover:text-white transition-colors font-bold text-lg"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-2 font-semibold text-[var(--primary-violet)] min-w-[2ch] text-center">
          {quantity}
        </span>
        <button
          className="px-2 py-1 rounded hover:bg-[var(--primary-violet-2)] hover:text-white transition-colors font-bold text-lg"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        className={
          "bg-secondary px-4 py-2 text-primary rounded font-semibold shadow hover:bg-[var(--primary-violet-2)] hover:text-white transition-colors min-w-[120px]" +
          (added ? " bg-green-500 text-white" : "")
        }
        onClick={handleAdd}
        disabled={quantity < 1}
      >
        {added ? "Added!" : "Add To Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
