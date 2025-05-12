import React from 'react';
import { Modal, Button } from '@shared/ui';

interface Props {
  isOpen: boolean;
  type: 'reset' | 'delete';
  username?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal: React.FC<Props> = (
  {
    isOpen,
    type,
    username,
    onClose,
    onConfirm,
  }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={
      type === 'reset'
        ? 'Сбросить всю игру?'
        : `Удалить игрока «${username}»?`
    }
  >
    <div className="flex justify-end space-x-2">
      <Button variant="solid" className='w-full' onClick={onClose}>Отмена</Button>
      <Button variant='solid' className='w-full' onClick={onConfirm}>Да, подтвердить</Button>
    </div>
  </Modal>
);
