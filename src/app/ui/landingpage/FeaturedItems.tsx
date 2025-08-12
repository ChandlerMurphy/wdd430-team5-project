import React from "react";
import FeaturedItem from "./FeaturedItem";
import { featureditemsData } from "../../../../lib/data";

const FeaturedItems = async () => {
  const featureItemProducts = await featureditemsData();

  return (
    <div className="w-[95%] m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {featureItemProducts?.map((product) => (
          <FeaturedItem key={product.product_id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
