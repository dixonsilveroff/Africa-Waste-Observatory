import { cn } from '@/lib/utils';
import React from 'react';

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export function Chip({ active, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer',
        active
          ? 'bg-primary text-white'
          : 'bg-secondary-container text-secondary-on-container',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Chip;
