import React from 'react';
import { cn } from '../../utils/cn';

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    fullWidth = false,
    size = 'md',
    className = '',
    ...rest
  } = props as ButtonProps;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide select-none " +
    "transition-all duration-300 active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/20 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

  const variants: Record<NonNullable<CommonProps['variant']>, string> = {
    primary:
      "bg-brand-primary text-white shadow-soft border border-transparent " +
      "hover:bg-brand-dark hover:shadow-soft-lg hover:-translate-y-0.5",
    secondary:
      "bg-white text-brand-dark border border-brand-border shadow-card " +
      "hover:bg-brand-light hover:border-brand-primary/30 hover:-translate-y-0.5",
    danger:
      "bg-brand-accent text-white shadow-soft border border-transparent " +
      "hover:bg-orange-800 hover:shadow-soft-lg hover:-translate-y-0.5",
  };

  const sizes: Record<NonNullable<CommonProps['size']>, string> = {
    sm: "py-2.5 px-5 text-sm",
    md: "py-3 px-7 text-base",
    lg: "py-4 px-9 text-lg",
    xl: "py-5 px-10 text-xl sm:text-2xl",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = cn(base, variants[variant], sizes[size], widthClass, className);

  if ((props as ButtonAsAnchor).as === 'a') {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};