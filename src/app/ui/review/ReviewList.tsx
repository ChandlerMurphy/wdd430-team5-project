'use client';

import { useState } from "react";

const allReviews = [
{ name: 'Name 1', rating: 4, comment: 'Comment 1', date: '07-28-2025' },
{ name: 'Name 2', rating: 2, comment: 'Comment 2', date: '07-27-2025' },
{ name: 'Name 3', rating: 3, comment: 'Comment 3', date: '07-26-2025' },
{ name: 'Name 4', rating: 3, comment: 'Comment 3', date: '07-12-2025' },
{ name: 'Name 5', rating: 2, comment: 'Comment 4', date: '07-22-2025' },
{ name: 'Name 6', rating: 3, comment: 'Comment 5', date: '06-26-2025' },
{ name: 'Name 7', rating: 5, comment: 'Comment 6', date: '08-26-2025' },
{ name: 'Name 8', rating: 3, comment: 'Comment 7', date: '07-29-2025' },
{ name: 'Name 9', rating: 5, comment: 'Comment 8', date: '07-10-2025' },
];



export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

    // const review = await fetchReviewById(id) - future function
    
    const [visibleCount, setVisibleCount] = useState(3);
    const visibleReviews = allReviews.slice(0, visibleCount);

    const showMore = () => {
        setVisibleCount((prev) => prev + 3);
    };
 
    return (
        <div className="space-y-4">
            {visibleReviews.map((review, index) => (
            <div key={index}>
                <h3>{review.date}</h3>
                <h2>{review.name}</h2>
                <div className='flex items-center gap-1'>
                    {'⭐'.repeat(review.rating)}
                </div>
                <div>
                    <p>{review.comment}</p>
                </div>
            </div> 
            
            ))}   

            {visibleCount < allReviews.length && (
                <div>
                    <button
                        onClick={showMore}
                        className="text-primary font-semibold hover:underline"
                        aria-label="Show more reviews"
                    >
                        Show more reviews &gt;
                    </button>
                </div>
            )}     

        </div>


    );

}