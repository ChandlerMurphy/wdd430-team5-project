import React from "react";
import { Products } from "../../../../lib/placeholder";
import ScrollingArt from "./ScrollingArt";

const ScrollingArts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center mt-10 mx-10">
        {Products.map((product) => (
          <ScrollingArt key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingArts;
