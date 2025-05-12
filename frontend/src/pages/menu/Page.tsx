import React from 'react';
import { Button, Icon } from '@shared/ui';
import { useNavigate } from 'react-router';

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-full items-center justify-center gap-10">
      <Button
        onClick={() => navigate('/game')}
        className="w-3xs justify-start text-2xl h-auto text-center"
        startContentIcon={<Icon type="plus"/>}
      >Новая Игра</Button>
      <Button
        className="w-3xs justify-start text-2xl h-auto text-center"
        startContentIcon={<Icon type="question"/>}
      >Справка</Button>
    </section>
  );
};
