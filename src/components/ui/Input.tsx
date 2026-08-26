import { cn } from '@/lib/utils';
import React from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/60 rounded-moderate border-0 transition-all focus:outline-none focus:ring-0 focus:border-l-4 focus:border-l-primary',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
