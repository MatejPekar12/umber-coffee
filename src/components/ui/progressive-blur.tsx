'use client'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
    className?: string
    direction?: 'left' | 'right' | 'top' | 'bottom'
    blurIntensity?: number
}

export function ProgressiveBlur({
    className,
    direction = 'left',
    blurIntensity = 1,
}: ProgressiveBlurProps) {
    const steps = 8
    const isHorizontal = direction === 'left' || direction === 'right'

    const gradientDirection = {
        left: 'to right',
        right: 'to left',
        top: 'to bottom',
        bottom: 'to top',
    }[direction]

    return (
        <div className={cn('pointer-events-none', className)} aria-hidden>
            {Array.from({ length: steps }).map((_, i) => {
                const progress = (i + 1) / steps
                const blur = blurIntensity * progress * 8
                const opacityStart = i / steps
                const opacityEnd = (i + 1) / steps

                return (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            backdropFilter: `blur(${blur}px)`,
                            WebkitBackdropFilter: `blur(${blur}px)`,
                            maskImage: `linear-gradient(${gradientDirection}, transparent ${opacityStart * 100}%, black ${opacityEnd * 100}%)`,
                            WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent ${opacityStart * 100}%, black ${opacityEnd * 100}%)`,
                        }}
                    />
                )
            })}
        </div>
    )
}
