import React from "react";
import HeroCard from "./HeroCard";
import { products } from "../../../../lib/placeholder";

const HeroCards = () => {
  return (
    <div className="w-full my-5">
      <h1 className="bg-accent w-full py-2 px-2 font-semibold text-primary text-1xl">
        Featured Handcrafted Items
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
        {products.map((product) => (
          <HeroCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
