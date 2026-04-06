'use client'
import { cn } from '@/lib/utils'
import { useReducedMotion } from 'motion/react'
import React from 'react'

interface InfiniteSliderProps {
    children: React.ReactNode
    className?: string
    speed?: number
    speedOnHover?: number
    gap?: number
    direction?: 'horizontal' | 'vertical'
}

export function InfiniteSlider({
    children,
    className,
    speed = 30,
    speedOnHover,
    gap = 64,
    direction = 'horizontal',
}: InfiniteSliderProps) {
    const prefersReducedMotion = useReducedMotion()
    const [currentSpeed, setCurrentSpeed] = React.useState(speed)
    const items = React.Children.toArray(children)

    const duration = `${(100 / currentSpeed) * 10}s`

    const handleMouseEnter = () => {
        if (speedOnHover !== undefined) setCurrentSpeed(speedOnHover)
    }
    const handleMouseLeave = () => setCurrentSpeed(speed)

    if (prefersReducedMotion) {
        return (
            <div className={cn('flex overflow-hidden', className)}>
                {items.map((child, i) => (
                    <div key={i} style={{ marginRight: gap }}>
                        {child}
                    </div>
                ))}
            </div>
        )
    }

    const isHorizontal = direction === 'horizontal'

    return (
        <div
            className={cn('flex overflow-hidden', isHorizontal ? 'flex-row' : 'flex-col', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ maskImage: 'none' }}>
            {[0, 1].map((idx) => (
                <div
                    key={idx}
                    className={cn(
                        'flex shrink-0',
                        isHorizontal ? 'flex-row' : 'flex-col',
                        isHorizontal ? 'animate-slider-horizontal' : 'animate-slider-vertical'
                    )}
                    style={
                        {
                            gap,
                            animationDuration: duration,
                            '--gap': `${gap}px`,
                        } as React.CSSProperties
                    }
                    aria-hidden={idx === 1}>
                    {items.map((child, i) => (
                        <div key={i} className="flex items-center">
                            {child}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
