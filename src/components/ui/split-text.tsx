import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SplitType = 'chars' | 'words';

type MotionState = {
  opacity: number;
  y: number;
};

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: MotionState;
  to?: MotionState;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
  triggerOnce?: boolean;
};

const SplitText = ({
  text,
  className,
  delay = 45,
  duration = 0.7,
  ease = 'cubic-bezier(0.22, 1, 0.36, 1)',
  splitType = 'chars',
  from = { opacity: 0, y: 28 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
  showCallback = false,
  triggerOnce = true,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const segments = useMemo(
    () => (splitType === 'words' ? text.split(' ') : text.split('')),
    [splitType, text]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      setIsVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  useEffect(() => {
    if (!showCallback || !onLetterAnimationComplete || !isVisible) return;

    const count = splitType === 'chars' ? text.replace(/\s/g, '').length : segments.length;
    const timeout = window.setTimeout(
      () => onLetterAnimationComplete(),
      Math.max(0, (count - 1) * delay + duration * 1000)
    );

    return () => window.clearTimeout(timeout);
  }, [
    showCallback,
    onLetterAnimationComplete,
    isVisible,
    splitType,
    text,
    segments.length,
    delay,
    duration,
  ]);

  return (
    <span
      ref={containerRef}
      className={cn('inline-block', className)}
      style={{ textAlign }}
      aria-label={text}
    >
      {segments.map((segment, index) => {
        const content =
          splitType === 'chars'
            ? segment === ' '
              ? '\u00A0'
              : segment
            : `${segment}${index < segments.length - 1 ? '\u00A0' : ''}`;

        return (
          <span
            key={`${segment}-${index}`}
            aria-hidden="true"
            className="inline-block will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? to.opacity : from.opacity,
              transform: `translateY(${isVisible ? to.y : from.y}px)`,
              transitionProperty: 'transform, opacity',
              transitionDuration: `${duration}s`,
              transitionTimingFunction: ease,
              transitionDelay: `${index * delay}ms`,
            }}
          >
            {content}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
