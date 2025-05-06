// src/features/addPlayerModal/AddPlayerModal.tsx
import React, { useState } from 'react';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import type { PlayerSession } from '../../entities/users/types';

interface Props {
  open: boolean;
  onAdd: (session: PlayerSession) => void;
  onClose: () => void;
}
export const AddPlayerModal: React.FC<Props> = ({ open, onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const [power, setPower] = useState(1);

  function handleSubmit() {
    if (!name) return;
    onAdd({ username: name, level, power });
    setName('');
    setLevel(1);
    setPower(1);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-xl mb-4">Добавить игрока</h3>
      <input
        className="w-full mb-2 p-2 rounded text-black"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          className="p-2 rounded text-black w-1/2"
          min={1}
          value={level}
          onChange={(e) => setLevel(+e.target.value)}
        />
        <input
          type="number"
          className="p-2 rounded text-black w-1/2"
          min={1}
          value={power}
          onChange={(e) => setPower(+e.target.value)}
        />
      </div>
      <Button onClick={handleSubmit} className="w-full">
        Добавить
      </Button>
    </Modal>
  );
};
