import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Icon } from '@shared/ui';
import { useGame } from '@app/providers/GameProvider.tsx';
import { initialUsersState } from '@features/assistant';

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const game = useGame();

  return (
    <section className="flex flex-col h-full items-center justify-center gap-10">
      <Button
        onClick={() => navigate('/game')}
        className="min-w-3xs w-auto justify-start text-2xl h-auto text-center"
        startContent={<Icon type={
          game.users === initialUsersState ? ('plus') : ('resume')
        } />}
      >
        {
          game.users === initialUsersState ? ('Начать игру') : ('Продолжить игру')
        }
      </Button>
      <Button
        onClick={() => navigate('/support')}
        className="min-w-3xs w-auto justify-start text-2xl h-auto text-center"
        startContent={<Icon type="question" />}
      >
        Справка
      </Button>
    </section>
  );
};
