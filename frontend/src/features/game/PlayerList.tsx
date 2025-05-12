// src/features/playerList/PlayerList.tsx
import React, { useEffect, useState } from 'react';
import { getAllUsers, addUser, updateUser, deleteUser } from '@entities/users/model';
import type { UserRecord, PlayerSession } from '@entities/users/types';
import { Button } from '@shared/ui/Button';
import { AddPlayerModal } from '../addPlayerModal/AddPlayerModal';
import { ConfirmDialog } from '../confirmDialog/ConfirmDialog';

export const PlayerList: React.FC = () => {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [addOpen, setAddOpen] = useState(false);
  const [confirm, setConfirm] = useState<{ id: number; title: string } | null>(null);

  function reload() {
    setUsers(getAllUsers());
  }

  useEffect(reload, []);

  const handleAdd = (sess: PlayerSession) => {
    addUser(sess);
    reload();
  };
  const handleDelete = (id: number) => {
    deleteUser(id);
    reload();
  };
  const handleUpdate = (id: number, fields: Partial<PlayerSession>) => {
    updateUser(id, fields);
    reload();
  };

  return (
    <div className="space-y-2">
      <Button onClick={() => setAddOpen(true)}>Добавить манчкина</Button>
      {users.map((u) => (
        <div
          key={u.id}
          className="bg-gray-700 text-white p-4 rounded flex justify-between items-center"
        >
          <span>
            {u.session.username} (ур. {u.session.level}, мощь {u.session.power})
          </span>
          <div className="space-x-1">
            <Button
              onClick={() =>
                handleUpdate(u.id, {level: Math.max(1, u.session.level - 1)})
              }
            >
              - ур
            </Button>
            <Button onClick={() => handleUpdate(u.id, {level: u.session.level + 1})}>
              + ур
            </Button>
            <Button
              onClick={() =>
                handleUpdate(u.id, {power: Math.max(1, u.session.power - 1)})
              }
            >
              - мощь
            </Button>
            <Button onClick={() => handleUpdate(u.id, {power: u.session.power + 1})}>
              + мощь
            </Button>
            <Button
              onClick={() =>
                setConfirm({id: u.id, title: `Удалить игрока ${u.session.username}?`})
              }
            >
              Удалить
            </Button>
          </div>
        </div>
      ))}

      <AddPlayerModal
        open={addOpen}
        onAdd={handleAdd}
        onClose={() => setAddOpen(false)}
      />
      {confirm && (
        <ConfirmDialog
          open={true}
          title={confirm.title}
          onCancel={() => setConfirm(null)}
          onConfirm={() => {
            handleDelete(confirm.id);
            setConfirm(null);
          }}
        />
      )}
    </div>
  );
};
