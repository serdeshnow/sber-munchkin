import React from 'react';
import { Modal, Button } from '@shared/ui';

interface ConfirmModalProps {
  isOpen: boolean;
  type: 'reset' | 'delete';
  username?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  type,
  username,
  onClose,
  onConfirm,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={type === 'reset' ? 'Сбросить всю игру?' : `Удалить игрока «${username}»?`}
  >
    <div className="flex flex-col sm:flex-row justify-end gap-2">
      <Button variant="solid" className="flex-1" onClick={onClose}>
        Отмена
      </Button>
      <Button variant="solid" className="flex-1" onClick={onConfirm}>
        Да, подтвердить
      </Button>
    </div>
  </Modal>
);
