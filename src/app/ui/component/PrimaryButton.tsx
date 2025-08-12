'use client';
import { roboto } from '@/app/ui/fonts'

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-xs mt-2 text-white font-semibold py-2 rounded-lg bg-accent opacity-80 hover:opacity-100 transition cursor-pointer disabled:opacity-50 ${roboto.className}`}
    >
      {children}
    </button>
  );
}