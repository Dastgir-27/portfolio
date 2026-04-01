import * as React from 'react';

import { cn } from '@/lib/utils';

type RetroGridProps = React.HTMLAttributes<HTMLDivElement>;

const RetroGrid = ({ className, ...props }: RetroGridProps) => {
  return (
    <div aria-hidden="true" className={cn('retro-grid-wrapper', className)} {...props}>
      <div className="retro-grid-plane" />
    </div>
  );
};

export { RetroGrid };
