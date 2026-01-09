import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'brand' | 'accent' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  const base = "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold leading-none";
  const variants = {
    neutral: "bg-slate-100 text-slate-700",
    brand: "bg-brand-green/10 text-brand-green",
    accent: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    outline: "border border-slate-200 text-slate-600 bg-white",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};