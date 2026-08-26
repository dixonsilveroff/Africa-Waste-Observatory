import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none cursor-pointer',
        // Sizing
        size === 'sm' && 'px-3 py-1.5 text-xs rounded-moderate',
        size === 'md' && 'px-5 py-2.5 text-sm rounded-moderate',
        size === 'lg' && 'px-7 py-3 text-base rounded-editorial',
        // Variants from DESIGN.md
        variant === 'primary' &&
          'bg-gradient-to-r from-primary to-primary-container text-white shadow-ambient hover:opacity-95 active:scale-[0.99]',
        variant === 'secondary' &&
          'bg-transparent border border-outline-variant text-primary hover:bg-surface-container-low',
        variant === 'tertiary' &&
          'bg-transparent text-primary hover:bg-surface-container-high',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
