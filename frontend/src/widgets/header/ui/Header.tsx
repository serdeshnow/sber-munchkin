import React from 'react';
import { Button, Icon, Title } from '@shared/ui';
import { useGame } from '@app/providers/GameProvider.tsx';
import { useLocation } from 'react-router';

export const Header: React.FC = () => {
  const {users, openReset, openAdd} = useGame();
  const location = useLocation();

  return (
    <header className="flex justify-between bg-dark-gray-500 px-10 py-4">
      <Title>Манчкины</Title>
      {
        location.pathname === '/game' && (
          <div className="flex gap-3 w-1/2">
            <Button
              className="px-6 text-2xl w-full"
              disabled={users.length >= 6}
              onClick={openAdd}>
              <Icon type="plus"/> Добавить манчкина
            </Button>
            <Button
              className="px-6 text-2xl w-full"
              onClick={openReset}
            >
              <Icon type="restart"/>
              Рестарт
            </Button>
          </div>
        )
      }
    </header>
  );
};
