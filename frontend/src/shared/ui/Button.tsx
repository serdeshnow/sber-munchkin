import React from 'react';
import cn from 'classnames';
import { Button as HeroButton, ButtonProps as HeroButtonProps } from '@heroui/react';

export type ButtonColor = 'primary' | 'secondary' | 'gray' | 'error' | 'logout' | 'disabled';

const colorMap: Record<ButtonColor, { bg: string; text: string }> = {
  primary: {bg: 'bg-brown-500', text: 'text-light-gray-500'},
  secondary: {bg: 'bg-secondary-500', text: 'text-light-gray-500'},
  gray: {bg: 'bg-secondary-600', text: 'text-light-gray-500'},
  error: {bg: 'bg-error-300', text: 'text-error-600'},
  logout: {bg: 'bg-transparent', text: 'text-error-500'},
  disabled: {bg: 'bg-dark-gray-500', text: 'text-light-gray-500'},
};

export interface ButtonProps extends Omit<HeroButtonProps, 'color'> {
  color?: ButtonColor;
  startIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (
  {
    variant = 'solid',
    size = 'md',
    radius = 'md',
    color = 'primary',
    startIcon,
    disabled = false,
    className,
    children,
    ...rest
  }) => {
  const key = disabled ? 'disabled' : color;
  const {bg, text} = colorMap[key];

  return (
    <HeroButton
      {...rest}
      variant={variant}
      size={size}
      radius={radius}
      startContent={startIcon}
      disabled={disabled}
      className={cn(
        bg,
        text,
        'text-base font-bold py-3',
        disabled && 'cursor-not-allowed opacity-70',
        className,
      )}
    >
      {children}
    </HeroButton>
  );
};
