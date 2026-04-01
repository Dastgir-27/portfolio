import { useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

type ClickSparkProps = {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
};

const ClickSpark = ({
  children,
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  className,
}: ClickSparkProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const emitSpark = useCallback(
    (x: number, y: number) => {
      const overlay = overlayRef.current;
      if (!overlay) return;

      const fragment = document.createDocumentFragment();

      for (let index = 0; index < sparkCount; index += 1) {
        const spark = document.createElement('span');
        const baseAngle = (index / sparkCount) * Math.PI * 2;
        const jitter = (Math.random() - 0.5) * 0.35;
        const angle = baseAngle + jitter;
        const degree = (angle * 180) / Math.PI;
        const travel = sparkRadius * (0.8 + Math.random() * 0.6);

        spark.style.position = 'absolute';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = `${sparkSize}px`;
        spark.style.height = '2px';
        spark.style.borderRadius = '9999px';
        spark.style.background = sparkColor;
        spark.style.boxShadow = `0 0 8px ${sparkColor}`;
        spark.style.pointerEvents = 'none';
        spark.style.transform = `translate(-50%, -50%) rotate(${degree}deg) translateX(0px)`;
        spark.style.transformOrigin = '0% 50%';
        spark.style.opacity = '1';

        spark.animate(
          [
            {
              transform: `translate(-50%, -50%) rotate(${degree}deg) translateX(0px) scaleX(1)`,
              opacity: 1,
            },
            {
              transform: `translate(-50%, -50%) rotate(${degree}deg) translateX(${travel}px) scaleX(0.5)`,
              opacity: 0,
            },
          ],
          {
            duration,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards',
          }
        );

        fragment.appendChild(spark);
        window.setTimeout(() => spark.remove(), duration + 50);
      }

      overlay.appendChild(fragment);
    },
    [duration, sparkColor, sparkCount, sparkRadius, sparkSize]
  );

  const handlePointerDownCapture = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    emitSpark(x, y);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      onPointerDownCapture={handlePointerDownCapture}
    >
      {children}
      <div ref={overlayRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden" />
    </div>
  );
};

export default ClickSpark;
