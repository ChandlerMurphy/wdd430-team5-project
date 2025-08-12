"use client";

import { useState, useMemo } from "react";
import { ProductData } from "lib/definition";
import ProductCard from "@/app/ui/products/ProductCard";

function filterProducts(
  products: ProductData[],
  categoryId: number | null,
  minPrice: number | null,
  maxPrice: number | null
) {
  return products.filter((p) => {
    const matchesCategory = categoryId === null || p.category_id === categoryId;
    const matchesMin = minPrice === null || p.price >= minPrice;
    const matchesMax = maxPrice === null || p.price <= maxPrice;
    return matchesCategory && matchesMin && matchesMax;
  });
}

export default function ProductsList({
  products,
  categoryId,
}: {
  products: ProductData[];
  categoryId: number | null;
}) {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const min = minPrice ? parseFloat(minPrice) : null;
    const max = maxPrice ? parseFloat(maxPrice) : null;
    return filterProducts(products, categoryId, min, max);
  }, [products, categoryId, minPrice, maxPrice]);

  return (
    <>
      {/* Filtro de preço */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Minimum price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <input
          type="number"
          placeholder="Maximum price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-32"
        />
      </div>

      {/* Lista de produtos */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <li key={product.product_id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
