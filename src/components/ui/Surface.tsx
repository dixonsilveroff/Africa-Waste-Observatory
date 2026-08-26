import { cn } from '@/lib/utils';
import React from 'react';

type SurfaceTier = 'base' | 'lowest' | 'low' | 'standard' | 'high' | 'highest';

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  tier?: SurfaceTier;
  elevation?: 'none' | 'ambient' | 'ambient-lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const tierClasses: Record<SurfaceTier, string> = {
  base: 'bg-surface',
  lowest: 'bg-surface-container-lowest',
  low: 'bg-surface-container-low',
  standard: 'bg-surface-container',
  high: 'bg-surface-container-high',
  highest: 'bg-surface-container-highest',
};

export function Surface({
  tier = 'standard',
  elevation = 'none',
  rounded = 'lg',
  className,
  children,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        tierClasses[tier],
        elevation === 'ambient' && 'shadow-ambient',
        elevation === 'ambient-lg' && 'shadow-ambient-lg',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-moderate',
        rounded === 'lg' && 'rounded-editorial',
        rounded === 'full' && 'rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Surface;
