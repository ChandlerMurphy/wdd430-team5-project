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
      className={`bg-accent text-white px-8 py-3 inline-block rounded-lg hover:bg-secondary disabled:opacity-50 transition ${roboto.className}`}
    >
      {children}
    </button>
  );
}