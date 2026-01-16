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
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold tracking-wide select-none leading-none " +
    "transition-all duration-200 transform " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-subtle " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

  const variants: Record<NonNullable<CommonProps['variant']>, string> = {
    primary:
      "bg-gradient-to-b from-[#3ebf4f] to-brand-green text-white shadow-lg border-b-4 border-brand-darkGreen " +
      "hover:from-[#46d258] hover:to-[#34a048] hover:shadow-green-900/20 hover:-translate-y-0.5 " +
      "active:border-b-0 active:translate-y-0.5",
    secondary:
      "bg-white text-ink border-2 border-slate-200 shadow-sm " +
      "hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:scale-[0.98]",
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