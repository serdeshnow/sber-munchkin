import React from 'react';
import cn from 'classnames';
import { Button, ButtonProps } from '@shared/ui';
import { Icon, IconType, IconProps } from '@shared/ui';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'startContentIcon'> {
  icon: IconType;
  iconProps?: Omit<IconProps, 'type' | 'size'>;
}

export const IconButton: React.FC<IconButtonProps> = (
  {
    icon,
    iconProps,
    className,
    ...buttonProps
  }) => {
  return (
    <Button
      {...buttonProps}
      className={cn(
        'p-[5px] inline-flex items-center justify-center',
        '!w-auto !min-w-0',
        className,
      )}
    >
      <Icon type={icon} size={30} {...iconProps} />
    </Button>
  );
};
