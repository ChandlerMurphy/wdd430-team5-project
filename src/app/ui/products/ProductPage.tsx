'use client';

import { useState } from 'react';
import { Reviews,  ProductData } from 'lib/definition';
import ReviewForm from '@/app/ui/review/ReviewForm';
import PrimaryButton from '@/app/ui/component/PrimaryButton';
import AddCartButton from '@/app/ui/component/AddCartButton';
import Image from 'next/image';
import ReviewList from '@/app/ui/review/ReviewList'
import AverageRating from '../review/Rating';
import Link from 'next/link';


export default function ProductPage(
  {
  product,
  reviews,
}: {
  product: ProductData;
  reviews: Reviews[];
}
) {
  const [isOpen, setIsOpen] = useState(false);
  const [succesMessage, setSuccessMessage] = useState('');

  return (
    <div className="p-6">
      {/* Back to all */}
      <div className="flex justify-end mb-4">
        <Link href="/products">
          <button className="px-4 py-2 text-gray-500 rounded hover:underline transition">
            ← Back to all products
          </button>
        </Link>
      </div>

      <div className="max-w-screen-lg mx-auto">      {/* Container flex image and info */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagem */}
          <div className="md:w-1/2">
            {product.image ? (
              <Image
                className="object-cover w-full max-w-md h-auto rounded"
                src={product.image}
                width={320}
                height={224}
                alt={product.product_name}
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
                No Image
              </div>
            )}
          </div>
          {/* Info */}  
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-2xl font-bold mb-2">{product.product_name}</h1>
            <p className="text-gray-600 mb-4 max-w-full md:max-w-xl">{product.description}</p>
            <AverageRating reviews={reviews} />
            <div className='mt-4'>
                <AddCartButton /> 
            </div>
            
          </div>
        </div>
      </div>

      
      {/* Reviews */}
      <div className="mt-16 mx-auto max-w-2xl text-center">
        {reviews && reviews.length > 0? (
          <ReviewList reviews={reviews?.map(r => ({
          name: r.user_name,
          rating: r.rating,
          comment: r.comment,
          date: new Date(r.created_at).toLocaleDateString(),
        }))} />
        ): (<p className="text-gray-500 italic">No reviews yet.</p>)
        }
          
        {/* Add new review */}
        <PrimaryButton onClick={() => setIsOpen(true)}>Add a Review</PrimaryButton>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                  aria-label="Close review modal"
                >
                  ✕
                </button>
                <ReviewForm productId={product.product_id} onSubmit={() => setIsOpen(false)} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}