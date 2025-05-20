import React, { type PropsWithChildren } from 'react';
import cn from 'classnames';

type TitleSize = 'main' | 'subtitle';

interface TitleProps extends PropsWithChildren {
  size?: TitleSize;
  onClick?: () => void;
  buildingAddress?: string;
  orderNumber?: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  size = 'main',
  onClick,
  buildingAddress,
  orderNumber,
  className,
  children,
}) => {

  const classes = cn({
    'text-2xl sm:text-3xl md:text-4xl font-bold text-light-gray-500': size === 'main',
    'text-[11px] sm:text-xs font-bold uppercase text-light-gray-500': size === 'subtitle',
  });

  return (
    <div className={cn('flex flex-col gap-1', className, onClick && 'cursor-pointer')} onClick={onClick}>
      <div className="flex items-center gap-1 sm:gap-2">

        {orderNumber && (
          <span className="mr-1 sm:mr-2 text-[10px] sm:text-xs font-bold text-gray-400">{orderNumber}</span>
        )}

        <span className={classes}>{children}</span>
      </div>

      {buildingAddress && (
        <span className="text-[11px] sm:text-sm font-normal text-gray-700">{buildingAddress}</span>
      )}
    </div>
  );
};
