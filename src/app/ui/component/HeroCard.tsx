import React from "react";
import Image from "next/image";
import { ProductDetails } from "../../../../lib/definition";
import AddToCart from "./AddToCart";

interface HeroCardProps {
  product: ProductDetails;
}

const HeroCard = ({ product }: HeroCardProps) => {
  const { image, productName, productOwner, price, ratings } = product;
  return (
    <div className="heroCards group relative flex flex-col items-center w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-100 p-5 m-2 transition-transform duration-200 hover:scale-105 hover:shadow-2xl overflow-hidden">
      {/* Badge */}
      <span className="absolute top-3 left-3 bg-[var(--primary-violet-2)] text-[var(--background)] text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
        Featured
      </span>
      {/* Product Image */}
      <div className="w-full flex justify-center mb-4">
        <Image
          alt={image.alt}
          src={image.src}
          width={180}
          height={180}
          className="rounded-xl object-cover aspect-square group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      {/* Product Name */}
      <h3 className="text-xl font-extrabold text-accent text-center mb-1 line-clamp-2 group-hover:text-[var(--primary-violet)] transition-colors duration-200">
        {productName}
      </h3>
      {/* Owner */}
      <p className="text-xs text-gray-500 mb-2 italic">By {productOwner}</p>
      {/* Price and Rating */}
      <div className="flex items-center justify-between w-full mb-3 px-2">
        <span className="text-accent font-bold text-lg">
          ${price.toFixed(2)}
        </span>
        <span className="flex items-center gap-1 text-yellow-500 font-semibold text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5 inline"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
          {ratings}
        </span>
      </div>
      {/* Add to Cart Button */}
      <div className="w-full flex justify-center">
        <AddToCart />
      </div>
    </div>
  );
};

export default HeroCard;
