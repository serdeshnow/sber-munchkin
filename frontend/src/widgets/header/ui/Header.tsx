import React from 'react';
import { Button, Icon, Title } from '@shared/ui';
import { useGame } from '@app/providers/GameProvider.tsx';


export const Header: React.FC = () => {
  const { openReset, openAdd } = useGame();

  return (
    <header className="flex justify-between bg-dark-gray-500 px-10 py-4">
      <Title>Манчкины</Title>
      <div className="flex gap-3 w-1/2">

        <Button
          className="px-6 text-2xl"
          onClick={openAdd}>
          <Icon type="plus"/> Добавить манчкина
        </Button>
        <Button
          className="px-6 text-2xl"
          onClick={openReset}
          startContentIcon={<Icon type="restart"/>}
        >
          Рестарт
        </Button>
      </div>
    </header>
  );
};
