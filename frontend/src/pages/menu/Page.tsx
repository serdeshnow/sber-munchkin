import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Icon } from '@shared/ui';

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-full items-center justify-center gap-10">
      <Button
        onClick={() => navigate('/game')}
        className="w-3xs justify-start text-2xl h-auto text-center"
        startContent={<Icon type="plus" />}
      >
        Начать игру
      </Button>
      <Button
        onClick={() => navigate('/support')}
        className="w-3xs justify-start text-2xl h-auto text-center"
        startContent={<Icon type="question" />}
      >
        Справка
      </Button>
    </section>
  );
};
