import React from 'react';
import cn from 'classnames';

export type CardVariant = 'primary' | 'transparent';

const variantMap: Record<CardVariant, { bg: string; shadow: string }> = {
  primary: { bg: 'bg-dark-gray-500', shadow: 'shadow-default' },
  transparent: { bg: 'bg-transparent', shadow: 'shadow-none' },
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const selectedVariant = variantMap[variant];

  return (
    <div
      className={cn(
        selectedVariant.bg,
        selectedVariant.shadow,
        'rounded-2xl px-5 py-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
