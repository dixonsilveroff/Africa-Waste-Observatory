import { cn } from '@/lib/utils';
import React from 'react';

interface DataPodProps extends React.HTMLAttributes<HTMLDivElement> {
  trend?: 'positive' | 'negative' | 'neutral';
  stat: string;
  label: string;
  sublabel?: string;
}

export function DataPod({
  trend = 'positive',
  stat,
  label,
  sublabel,
  className,
  ...props
}: DataPodProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-editorial bg-surface-container transition-all hover:shadow-ambient',
        className
      )}
      {...props}
    >
      <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-2">
        {label}
      </p>
      <p
        className={cn(
          'text-4xl font-display font-bold tracking-tight',
          trend === 'positive' && 'text-primary',
          trend === 'negative' && 'text-error',
          trend === 'neutral' && 'text-on-surface'
        )}
      >
        {stat}
      </p>
      {sublabel && (
        <p className="mt-2 text-xs text-on-surface-variant/80">{sublabel}</p>
      )}
    </div>
  );
}

export default DataPod;
