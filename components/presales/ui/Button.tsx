import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  href,
  ...props 
}) => {
  const base = "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed leading-none tracking-wide";
  
  const variants = {
    primary: "bg-gradient-to-b from-[#3ebf4f] to-[#2d8a3e] hover:from-[#46d258] hover:to-[#34a048] text-white shadow-lg hover:shadow-green-900/20 transform hover:-translate-y-0.5 border-b-4 border-[#1e5e2a] active:border-b-0 active:translate-y-0.5 rounded-xl",
    secondary: "bg-white text-ink border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm rounded-lg transform active:scale-95",
    ghost: "bg-transparent text-ink-light hover:text-brand-green hover:bg-green-50 rounded-md",
  };
  
  const sizes = {
    sm: "text-xs py-2 px-3",
    md: "text-sm py-2.5 px-4",
    lg: "text-lg py-3 px-8",
    xl: "text-xl md:text-2xl py-4 px-10",
  };
  
  const width = fullWidth ? "w-full" : "";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if (href) {
    const { type, ...anchorProps } = props;
    return (
      <a 
        href={href} 
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
};
