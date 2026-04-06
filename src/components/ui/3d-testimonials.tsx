import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
} & ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        { 'flex-row': !vertical, 'flex-col': vertical },
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 justify-around',
            !vertical && 'animate-marquee flex-row [gap:var(--gap)]',
            vertical && 'animate-marquee-vertical flex-col [gap:var(--gap)]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
