import { allProductsData } from "../../../lib/data";
import ProductCard from "@/app/ui/products/ProductCard";
import { ProductData } from "lib/definition";
import CategorySidebar from "@/app/ui/products/CategorySidebar";

function filterProductsByCategory(
  products: ProductData[],
  categoryId: number | null
) {
  if (categoryId === null) return products;
  return products.filter((p) => p.category_id === categoryId);
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const products = await allProductsData();

  const selectedCategory = params?.category ? Number(params.category) : null;
  const filteredProducts = filterProductsByCategory(
    products ?? [],
    selectedCategory
  );

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar */}
      <CategorySidebar></CategorySidebar>

      {/* Lista de produtos */}
      <div className="flex-1">
        <h1 className="text-accent text-2xl font-bold mb-4">All products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <li key={product.product_id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
