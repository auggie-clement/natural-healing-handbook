import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'flat';
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const base = "rounded-xl overflow-hidden";
  const variants = {
    default: "bg-white shadow-card border border-slate-200",
    glass: "bg-white/90 backdrop-blur shadow-card border border-slate-200",
    flat: "bg-slate-50 border border-slate-200",
  };
  
  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};