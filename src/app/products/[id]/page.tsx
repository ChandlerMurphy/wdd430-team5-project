import { fetchProductById, fetchReviewsByProductId } from 'lib/data'
import { notFound } from 'next/navigation';
import ProductPage from '@/app/ui/products/ProductPage';

interface PageProps {
  params: { id: number };
}

export default async function Page({ params }: PageProps) {

  const product = await fetchProductById(params.id);
  if (!product) notFound();

  const reviews = await fetchReviewsByProductId(params.id);

  return (
    <ProductPage product={product} reviews={reviews}></ProductPage>
  )

}