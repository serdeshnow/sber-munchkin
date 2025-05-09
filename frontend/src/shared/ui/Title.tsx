import React, { type PropsWithChildren } from 'react';
import cn from 'classnames';
// import { useNavigate } from 'react-router';
// import { Button } from '@shared/ui/Button.tsx';
// import { Icon } from '@shared/ui/Icon.tsx';

type TitleSize = 'main' | 'subtitle';

interface TitleProps extends PropsWithChildren {
  size?: TitleSize;
  // backButton?: boolean;
  // onBack?: () => void;
  buildingAddress?: string;
  orderNumber?: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  size = 'main',
  // backButton = false,
  // onBack,
  buildingAddress,
  orderNumber,
  className,
  children,
}) => {
  // const navigate = useNavigate();

  const classes = cn({
    'text-3xl font-bold text-light-gray-500': size === 'main',
    'text-[12px] font-bold uppercase text-light-gray-500': size === 'subtitle',
  });

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-center gap-2">
        {/*{backButton && (*/}
        {/*  <Button*/}
        {/*    onPress={onBack ? onBack : () => navigate(-1)}*/}
        {/*    size="sm"*/}
        {/*    color="gray"*/}
        {/*    className="mr-2 flex h-8 w-8 min-w-0 items-center justify-center p-0"*/}
        {/*    startContentIcon={<Icon type="arrowLeft" size={32} />}*/}
        {/*    aria-label="Назад"*/}
        {/*  />*/}
        {/*)}*/}

        {orderNumber && (
          <span className="mr-2 text-xs font-bold text-gray-400">{orderNumber}</span>
        )}

        <span className={classes}>{children}</span>
      </div>

      {buildingAddress && (
        <span className="text-sm font-normal text-gray-700">{buildingAddress}</span>
      )}
    </div>
  );
};
