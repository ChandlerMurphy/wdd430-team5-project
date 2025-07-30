import React from "react";
import HeroCard from "./HeroCard";
import { products } from "../../../../lib/placeholder";
import PageName from "./PageName";

const HeroCards = () => {
  return (
    <div className="w-full my-5">
      <PageName
        pageName="Featured Handcrafted items"
        bgColor="bg-[var(--primary-violet-2)]"
      />
      <div className="flex justify-between py-5 px-5">
        {products.map((product) => (
          <HeroCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
