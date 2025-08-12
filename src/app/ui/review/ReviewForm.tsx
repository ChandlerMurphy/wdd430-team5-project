'use client';

import { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";

export default function ReviewForm({
    productId,
    onSubmit,
}: {
    productId: number;
    onSubmit?: () => void;
}) {
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);

    const isSubmitDisabled = loading || !user.trim() || !comment.trim();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const date = new Date().toISOString().split('T')[0];

            const reviewData = {
                productId,
                rating,
                comment,
                user,
                date,
            };

            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewData),
            });

            if (!res.ok) {
                throw new Error('Failed to submit review');
            }

            setSucess(true);
            onSubmit?.(); //close modal

            //clean the form
            setUser('');
            setComment('');
            setRating(5);
        } catch (err) {
            console.error('Failed to submit review', err);
            alert('Failed to submit review. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold">Leave a Review</h2>
            {sucess && (
                <p className="text-green-600 mb-4">Review submitted successfully!</p>
            )}
            {/* Your Name */}
            <div className="mb-4">
                <label htmlFor="user">Your Name</label>
                <input
                    id="user"
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                    placeholder="Enter your name"
                />
            </div>
            {/* Rating */}
            <div className="mb-4">
                <label htmlFor="ratring" className="block text-sm font-medium">
                    Rating
                </label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="mt-1 block w-full rounded border border-gray-300 p-2">
                    {[1, 2, 3, 4, 5].map((r) => (
                        <option key={r} value={r}>
                            {r} Star{r > 1 && 's'}
                        </option>
                    ))}
                </select>
            </div>

            {/* Comment */}
            <div>
                <label htmlFor="comment">Comment</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="mt-1 block w-full rounded border border-gray-300 p-2 resize-none"
                    rows={4}
                    placeholder="What did you think about the product?"
                />

            </div>
            <PrimaryButton type="submit" disabled={isSubmitDisabled}>
                {loading ? 'Submitting...' : 'Submit Review'}
            </PrimaryButton>
        </form>
    )
}