import React from "react";
import Image from "next/image";
import { ProductDetails } from "../../../../lib/definition";

interface HeroCardProps {
  product: ProductDetails;
}

const HeroCard = ({ product }: HeroCardProps) => {
  const { image, productName, productOwner, price, ratings } = product;
  return (
    <div className="heroCards p-4 rounded-lg shadow bg-white flex flex-col items-center gap-2 w-60">
      <div className="w-full flex justify-center">
        <Image
          alt={image.alt}
          src={image.src}
          width={120}
          height={200}
          className="rounded"
        />
      </div>
      <h3 className="text-lg font-bold text-accent text-center">
        {productName}
      </h3>
      <p className="text-sm text-gray-500">By {productOwner}</p>
      <div className="flex items-center gap-2">
        <span className="text-accent font-semibold">${price.toFixed(2)}</span>
        <span className="text-yellow-500">★ {ratings}</span>
      </div>
      <button className="bg-secondary p-2 text-primary rounded">
        Add To Cart
      </button>
    </div>
  );
};

export default HeroCard;
