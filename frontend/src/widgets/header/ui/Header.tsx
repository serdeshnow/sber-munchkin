import React from 'react';
import { Button, Icon } from '@shared/ui';


export const Header: React.FC = () => {
  // TODO: throw logic inside

  return (
    <header className="flex space-x-2 bg-dark-gray-500">
      <Button color="primary" onClick={() => setAddModalOpen(true)}>
        <Icon type="plus" /> Добавить игрока
      </Button>
      <Button
        color="error"
        onClick={() => setConfirmModal({ type: 'reset', open: true })}
      >
        Сбросить игру
      </Button>
    </header>
  );
};
