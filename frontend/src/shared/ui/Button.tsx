import React from 'react';
import cn from 'classnames';
import { Button as HeroButton, ButtonProps as HeroButtonProps } from '@heroui/react';

type ButtonColor = 'primary' | 'secondary' | 'gray' | 'error' | 'logout';

const colorMap: Record<ButtonColor, { bg: string; text: string }> = {
  primary: { bg: 'bg-brown-500', text: 'text-light-gray-500' },
  secondary: { bg: 'bg-secondary-500', text: 'text-light-gray-500' },
  gray: { bg: 'bg-secondary-600', text: 'text-light-gray-500' },
  error: { bg: 'bg-error-300', text: 'text-error-600' },
  logout: { bg: 'bg-none', text: 'text-error-500' },
};

export interface ButtonProps extends Omit<HeroButtonProps, 'color'> {
  color?: ButtonColor;
  startContentIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  radius = 'md',
  color = 'primary',
  startContentIcon,
  className = '',
  children,
  ...props
}) => {
  const selected = colorMap[color];

  return (
    <HeroButton
      {...props}
      variant={variant}
      size={size}
      radius={radius}
      startContent={startContentIcon}
      className={cn(
        selected.bg,
        selected.text,
        `text-base font-bold w-full py-3`,
        className,
      )}
    >
      {children}
    </HeroButton>
  );
};
