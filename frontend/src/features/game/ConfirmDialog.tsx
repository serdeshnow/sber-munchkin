// src/features/confirmDialog/ConfirmDialog.tsx
import React from 'react';
import { Modal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';

interface Props {
  isOpen: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}
export const ConfirmDialog: React.FC<Props> = ({ isOpen, title, onConfirm, onCancel }) => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <p className="mb-4">{title}</p>
    <div className="flex justify-end space-x-2">
      <Button onClick={onCancel}>Отмена</Button>
      <Button onClick={onConfirm}>Да</Button>
    </div>
  </Modal>
);
