import React from 'react';
import { Button, Icon, Title } from '@shared/ui';


export const Header: React.FC = () => {
  // TODO: throw logic inside

  return (
    <header className="flex justify-between bg-dark-gray-500 px-10 py-4">
      <Title>Манчкины</Title>
      <div className='flex gap-3 w-1/2'>

        <Button
          className='px-6 text-2xl'
          onClick={() => setAddModalOpen(true)}>
          <Icon type="plus" /> Добавить манчкина
        </Button>
        <Button
          className='px-6 text-2xl'
          onClick={() => setConfirmModal({ type: 'reset', open: true })}
          startContentIcon={<Icon type='restart'/>}
        >
          Рестарт
        </Button>
      </div>
    </header>
  );
};
