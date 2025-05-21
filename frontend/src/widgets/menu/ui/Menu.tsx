import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Icon } from '@shared/ui';

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-[50vh] w-full items-center justify-end gap-10">
      <Button
        onClick={() => navigate('/game')}
        className="min-w-3xs w-auto justify-start text-2xl h-auto text-center"
        startContent={<Icon type="resume"/>}
      >
        Играть
      </Button>
      <Button
        onClick={() => navigate('/support')}
        className="min-w-3xs w-auto justify-start text-2xl h-auto text-center"
        startContent={<Icon type="question"/>}
      >
        Справка
      </Button>
    </section>
  );
};
