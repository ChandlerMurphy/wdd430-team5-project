'use client';

import { useState } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleReviews = reviews.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="space-y-6 mt-6 overflow-scroll h-[140px] max-h-[140px] hide-scrollbar">
      {visibleReviews.map((review, index) => (
        <div key={index} className="">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">{review.date}</h3>
              <h2 className="font-semibold text-lg pb-1">{review.name}</h2>
            </div>

            <div className="text-yellow-500 text-sm">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>

          <p className="mt-2 text-left text-gray-700">{review.comment}</p>
        </div>
      ))}

      {visibleCount < reviews.length && (
        <div>
          <button
            onClick={showMore}
            className="text-accent font-semibold hover:underline"
            aria-label="Show more reviews"
          >
            Show more reviews &gt;
          </button>
        </div>
      )}
    </div>
  );
}
