import Link from "next/link";
import { ProductData } from "lib/definition";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
    product: ProductData;
}

export default function ProductCard({ product }:  ProductCardProps) {
  return (
    <Link href={`/products/${product.product_id}`}>    
        <div className="flex justify-center items-center py-6 cursor-pointer">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-300 max-w-full hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
            {product.image? (
                <Image
                className="object-cover w-full max-w-md h-auto rounded"
                src={product.image}
                width={320}
                height={224}
                alt={product.product_name}
                priority
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
                No Image
                </div>
            )}
            </div>
            <div className="p-5">
            <h4 className="text-xl font-bold text-gray-800 mb-1 truncate">
                {product.product_name}
            </h4>
            <p className="text-sm text-gray-500 mb-2">
                by{" "}
                <em className="text-[var(--primary-violet)] font-semibold">
                {product.product_owner}
                </em>
            </p>
            <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 inline"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
                {product.ratings}
                </span>
                <span className="text-lg text-secondary font-bold">${product.price}</span>
            </div>
            <button className="w-full mt-2 text-white font-semibold py-2 rounded-lg bg-secondary transition cursor-pointer">
                Add to cart
            </button>
            </div>
        </div>
        </div>
    </Link>

  );
}
