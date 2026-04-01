import React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  node: React.ReactNode;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = 'transparent',
  ariaLabel = 'Technology partners',
  className
}: LogoLoopProps) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden",
        className
      )}
      style={{
        '--gap': `${gap}px`,
        WebkitMaskImage: fadeOut ? `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` : 'none',
        maskImage: fadeOut ? `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` : 'none',
        background: fadeOutColor !== 'transparent' && !fadeOut ? fadeOutColor : 'transparent',
      } as React.CSSProperties}
      aria-label={ariaLabel}
    >
      <style>
        {`
          @keyframes marquee-${direction} {
            from { transform: translateX(${direction === 'left' ? '0' : 'calc(-100% - var(--gap))'}); }
            to { transform: translateX(${direction === 'left' ? 'calc(-100% - var(--gap))' : '0'}); }
          }
          .animate-marquee {
            animation: marquee-${direction} ${animationDuration} linear infinite;
          }
          .animate-marquee:hover {
            ${hoverSpeed ? `animation-duration: ${hoverSpeed}s !important;` : ''}
          }
          .logo-item {
             height: ${logoHeight}px;
             transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          ${scaleOnHover ? '.logo-item:hover { transform: scale(1.1); }' : ''}
        `}
      </style>
      
      <div 
        className="flex min-w-full shrink-0 flex-row items-center animate-marquee"
        style={{ gap: `${gap}px`, paddingRight: `${gap}px` }}
      >
        {logos.map((logo, index) => (
          <div key={`orig-${index}`} className="flex shrink-0 items-center gap-3 logo-item text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-4xl sm:text-5xl">{logo.node}</span>
            {logo.title && <span className="text-lg sm:text-xl font-bold">{logo.title}</span>}
          </div>
        ))}
      </div>

      <div 
        aria-hidden="true" 
        className="flex min-w-full shrink-0 flex-row items-center animate-marquee"
        style={{ gap: `${gap}px`, paddingRight: `${gap}px` }}
      >
        {logos.map((logo, index) => (
          <div key={`dup-${index}`} className="flex shrink-0 items-center gap-3 logo-item text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-4xl sm:text-5xl">{logo.node}</span>
            {logo.title && <span className="text-lg sm:text-xl font-bold">{logo.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
