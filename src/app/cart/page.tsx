"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <div>Your cart is empty.</div>;

  // Calcula o total
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <ul className="space-y-4">
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between border p-3 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <span>
                {product.name} - $ {product.price.toFixed(2)}
              </span>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Total e botão */}
      <div className="mt-6 p-4 border-t">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <button
          className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          onClick={() => alert("Finalizando compra...")}
        >
          Finalize Purchase
        </button>
      </div>
    </div>
  );
}
