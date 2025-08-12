import { allProductsData } from "../../../lib/data";
import { ProductData } from "lib/definition";
import CategorySidebar from "@/app/ui/products/CategorySidebar";
import ProductsList from "@/app/products/ProductsList";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const products = await allProductsData();

  const selectedCategory = params?.category ? Number(params.category) : null;

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar */}
      <CategorySidebar />

      {/* Lista de produtos com filtro de preço */}
      <div className="flex-1">
        <h1 className="text-accent text-2xl font-bold mb-4">All products</h1>
        <ProductsList products={products ?? []} categoryId={selectedCategory} />
      </div>
    </div>
  );
}
