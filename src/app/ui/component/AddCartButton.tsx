'use client';
import { roboto } from '@/app/ui/fonts'

export default function AddCartButton({
    onClick = () => {}, //add on the future
    disabled = false,
    className = '',
}: {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-xs mt-2 text-white font-semibold py-2 rounded-lg bg-secondary transition cursor-pointer disabled:opacity-50 ${roboto.className} ${className} m-4`}
    >
      Add to cart
    </button>
  );
}