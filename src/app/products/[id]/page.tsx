'use client';

import { useState } from 'react';
import ReviewForm from '@/app/ui/review/ReviewForm';
import PrimaryButton from '@/app/ui/component/PrimaryButton';

export default function Page() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

  return ( 
    <div className='p-6'>
        {/*  <Image/> */}
        <div className='md:w-1/2'>
            <img 
                src="favicon.ico" 
                alt="Product" 
                className='w-full rounded shadow'
            />
        </div>

        {/* Text: name + description + average rating */}
        <div className='md: w-1/2'>
            <h1 className="text-2xl font-bold mb-2">Name of the product</h1>
            <p className="text-gray-600 mb-4">A few description</p>
            {/* Avarege Rating */}
            <div className='Flex items-center gap-1'>
                {'⭐'.repeat(4)}
                <span className='text-sm text-gray-500'>(4.0)</span>
            </div>
        </div>
            {/*  <ReviewList/> */}
        <div>    
            {/*  <Button/> */}
            <PrimaryButton onClick={openModal}>Add a Review</PrimaryButton>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                            >
                            X
                        </button>
                        <ReviewForm productId="123" onSubmit={closeModal} />
                    </div>
                </div>
            )}
        </div>
    </div>   
    );
}