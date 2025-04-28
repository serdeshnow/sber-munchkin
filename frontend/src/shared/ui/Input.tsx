import React from 'react';
import { Input as HeroInput, InputProps as HeroInputProps } from '@heroui/react';

export type InputProps = HeroInputProps

export const Input: React.FC<InputProps> = (props) => {
    return (
      <HeroInput
        variant="bordered"
        size="md"
        labelPlacement="outside"
        classNames={{ label: 'font-bold' }}
        {...props}
      />
    );
};
