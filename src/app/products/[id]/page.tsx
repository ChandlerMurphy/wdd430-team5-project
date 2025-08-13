import { fetchProductById, fetchReviewsByProductId } from "lib/data";
import { notFound } from "next/navigation";
import ProductPage from "@/app/ui/products/ProductPage";

// Mantemos o tipo como Promise
type PageParams = Promise<{ id: string }>;

export default async function Page({ params }: { params: PageParams }) {
  // Desestruturação aguardando a Promise
  const { id } = await params;

  const productId = parseInt(id, 10);
  if (isNaN(productId)) notFound();

  const product = await fetchProductById(productId);
  if (!product) notFound();

  const reviews = await fetchReviewsByProductId(productId);

  return <ProductPage product={product} reviews={reviews} />;
}
