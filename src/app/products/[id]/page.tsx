// app/products/[id]/page.tsx
import {
  fetchProductById,
  fetchReviewsByProductId,
  allProductsData,
} from "lib/data";
import { notFound } from "next/navigation";
import ProductPage from "@/app/ui/products/ProductPage";

// 1. Generate static params for all products
export async function generateStaticParams() {
  const products = await allProductsData(); // fetch all products
  return products?.map((product) => ({
    id: product.product_id.toString(), // must be string
  }));
}

// 2. Define PageProps type
interface PageProps {
  params: { id: string };
}

// 3. Page component
export default async function Page({ params }: PageProps) {
  const productId = Number(params.id); // convert string to number

  const product = await fetchProductById(productId);
  if (!product) notFound(); // 404 if product not found

  const reviews = await fetchReviewsByProductId(productId);

  return <ProductPage product={product} reviews={reviews} />;
}
