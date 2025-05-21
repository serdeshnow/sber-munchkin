import React from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '@app/providers/GameProvider.tsx';
import { Button, Icon } from '@shared/ui';
import { initialUsersState } from '@features/assistant';

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const game = useGame();

  return (
    <section className="flex flex-col h-[50vh] w-full items-center justify-end gap-10">
      <Button
        onClick={() => navigate('/game')}
        className="min-w-3xs w-auto justify-start text-2xl h-auto text-center"
        startContent={
          <Icon type={game.users === initialUsersState ? 'plus' : 'resume'} />
        }
      >
        Играть
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
