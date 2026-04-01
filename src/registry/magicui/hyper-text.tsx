import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type HyperTextProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> & {
  children: string;
  intervalMs?: number;
  trigger?: 'hover' | 'in-view';
  animateOnce?: boolean;
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function HyperText({
  children,
  className,
  intervalMs = 30,
  trigger = 'hover',
  animateOnce = false,
  onMouseEnter,
  ...props
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    setDisplayText(children);
  }, [children]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const stopAnimation = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const runAnimation = () => {
    if (animateOnce && hasAnimatedRef.current) {
      return;
    }

    stopAnimation();

    let iteration = 0;
    intervalRef.current = window.setInterval(() => {
      const nextText = children
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return children[index] ?? char;
          return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        })
        .join('');

      setDisplayText(nextText);
      iteration += 1 / 3;

      if (iteration >= children.length) {
        stopAnimation();
        setDisplayText(children);
        hasAnimatedRef.current = true;
      }
    }, intervalMs);
  };

  useEffect(() => {
    if (trigger !== 'in-view') {
      return;
    }

    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      runAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) {
          return;
        }

        runAnimation();

        if (animateOnce) {
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger, animateOnce, children]);

  return (
    <span
      ref={elementRef}
      {...props}
      className={cn('inline-block cursor-default select-none', className)}
      onMouseEnter={(event) => {
        if (trigger === 'hover') {
          runAnimation();
        }
        onMouseEnter?.(event);
      }}
    >
      {displayText}
    </span>
  );
}
