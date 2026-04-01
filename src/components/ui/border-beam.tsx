import * as React from 'react';

import { cn } from '@/lib/utils';

type BorderBeamProps = React.HTMLAttributes<HTMLDivElement> & {
  duration?: number;
  size?: number;
  colorFrom?: string;
  colorTo?: string;
};

const BorderBeam = ({
  className,
  duration = 8,
  size = 80,
  colorFrom = 'hsl(var(--primary))',
  colorTo = 'hsl(var(--accent))',
  style,
  ...props
}: BorderBeamProps) => {
  const beamSize = Math.max(20, Math.min(size, 180));
  const beamFadeEnd = Math.min(beamSize + 28, 220);

  return (
    <div
      aria-hidden="true"
      className={cn('border-beam', className)}
      style={{
        ...style,
        '--beam-duration': `${duration}s`,
        backgroundImage: `linear-gradient(hsl(var(--card)), hsl(var(--card))), conic-gradient(from var(--beam-rotation), transparent 0deg, ${colorFrom} ${beamSize * 0.55}deg, ${colorTo} ${beamSize}deg, transparent ${beamFadeEnd}deg, transparent 360deg)`,
      } as React.CSSProperties}
      {...props}
    />
  );
};

export { BorderBeam };
