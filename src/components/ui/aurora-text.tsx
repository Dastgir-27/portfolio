import * as React from 'react';

import { cn } from '@/lib/utils';

type AuroraTextProps = React.HTMLAttributes<HTMLSpanElement>;

const AuroraText = ({ className, children, ...props }: AuroraTextProps) => {
  return (
    <span className={cn('aurora-text', className)} {...props}>
      {children}
    </span>
  );
};

export { AuroraText };
