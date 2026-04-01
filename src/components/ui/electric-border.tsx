import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ElectricBorderProps = {
  children: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
};

const ElectricBorder = ({
  children,
  color = '#0b7f19',
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  className,
  style,
}: ElectricBorderProps) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const filterId = useId().replace(/:/g, '');

  const normalizedSpeed = Math.max(0.2, speed);
  const normalizedChaos = Math.min(Math.max(chaos, 0.02), 0.5);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;

      setFrameSize({
        width: rect.width,
        height: rect.height,
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const borderRadiusPx = useMemo(() => {
    const borderRadius = style?.borderRadius;
    if (typeof borderRadius === 'number') return borderRadius;
    if (typeof borderRadius !== 'string') return 12;

    const trimmed = borderRadius.trim().toLowerCase();
    const parsed = Number.parseFloat(trimmed);
    if (Number.isNaN(parsed)) return 12;

    if (trimmed.endsWith('rem')) return parsed * 16;
    if (trimmed.endsWith('em')) return parsed * 16;
    return parsed;
  }, [style?.borderRadius]);

  const overlayInset = Math.max(8, thickness * 4);
  const viewWidth = frameSize.width + overlayInset * 2;
  const viewHeight = frameSize.height + overlayInset * 2;
  const rectX = overlayInset + thickness * 0.5;
  const rectY = overlayInset + thickness * 0.5;
  const rectWidth = Math.max(0, frameSize.width - thickness);
  const rectHeight = Math.max(0, frameSize.height - thickness);
  const rectRadius = Math.max(0, borderRadiusPx);

  return (
    <div
      className={cn('relative block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
    >
      <div ref={frameRef} className="relative z-[1]" style={style}>
        {children}
      </div>

      {frameSize.width > 0 && frameSize.height > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-[2] mix-blend-screen transition-opacity duration-150"
          style={{
            inset: -overlayInset,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <filter id={`electric-jitter-${filterId}`} x="-35%" y="-35%" width="170%" height="170%">
                <feTurbulence
                  type="turbulence"
                  baseFrequency={0.028 + normalizedChaos * 0.2}
                  numOctaves="3"
                  seed="13"
                  result="noise"
                >
                  {!prefersReducedMotion && (
                    <animate
                      attributeName="seed"
                      values="13;29;37;53;67;79;97"
                      dur={`${1.2 / normalizedSpeed}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={12 + normalizedChaos * 42}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>

              <filter id={`electric-glow-${filterId}`} x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation={thickness * 1.6} result="blur-a" />
                <feGaussianBlur in="SourceGraphic" stdDeviation={thickness * 3.2} result="blur-b" />
                <feMerge>
                  <feMergeNode in="blur-b" />
                  <feMergeNode in="blur-a" />
                </feMerge>
              </filter>
            </defs>

            <rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              rx={rectRadius}
              ry={rectRadius}
              fill="none"
              stroke={color}
              strokeWidth={thickness + 1.2}
              opacity={0.7}
              filter={`url(#electric-glow-${filterId})`}
            >
              {!prefersReducedMotion && (
                <animate
                  attributeName="opacity"
                  values="0.45;0.75;0.55;0.72;0.48"
                  dur={`${0.95 / normalizedSpeed}s`}
                  repeatCount="indefinite"
                />
              )}
            </rect>

            <rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              rx={rectRadius}
              ry={rectRadius}
              fill="none"
              stroke={color}
              strokeWidth={Math.max(1, thickness * 0.95)}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.32}
              filter={`url(#electric-jitter-${filterId})`}
            />

            <rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              rx={rectRadius}
              ry={rectRadius}
              fill="none"
              stroke={color}
              strokeWidth={Math.max(1, thickness * 1.05)}
              opacity={0.96}
              strokeDasharray="30 62 18 74 14 52"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#electric-jitter-${filterId})`}
            >
              {!prefersReducedMotion && (
                <>
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-320"
                    dur={`${0.85 / normalizedSpeed}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.45;1;0.35;0.95;0.42"
                    repeatCount="indefinite"
                    dur={`${0.62 / normalizedSpeed}s`}
                  />
                </>
              )}
            </rect>

            <rect
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              rx={rectRadius}
              ry={rectRadius}
              fill="none"
              stroke="#d6ffe1"
              strokeWidth={Math.max(0.8, thickness * 0.7)}
              opacity={0.75}
              strokeDasharray="8 86 6 70"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#electric-jitter-${filterId})`}
            >
              {!prefersReducedMotion && (
                <>
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-260"
                    dur={`${0.95 / normalizedSpeed}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.2;0.85;0.18;0.65;0.22"
                    dur={`${0.56 / normalizedSpeed}s`}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </rect>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ElectricBorder;
