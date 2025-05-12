import React from 'react';
import { ConfirmModal } from '@features/game';
import { UserCard } from '@entities/users';
import { useGame } from '@app/providers/GameProvider.tsx';

export const Game: React.FC = () => {
  const {
    users,
    confirm,
    openDelete,
    closeConfirm,
    onConfirm,

    editing,
    newName,
    setNewName,
    openRename,
    saveRename,
    cancelRename,

    changeLevel,
    changePower,
  } = useGame();

  return (
    <>
      <div className="flex flex-col gap-4 px-5">
        {users.map((u) => (
          <UserCard
            key={u.username}
            user={u}
            onDelete={openDelete}
            onRename={openRename}
            editing={editing === u.username}
            newName={newName}
            setNewName={setNewName}
            onSaveRename={saveRename}
            onCancelRename={cancelRename}
            onLevelChange={changeLevel}
            onPowerChange={changePower}
          />
        ))}
      </div>

      <ConfirmModal
        isOpen={confirm.open}
        type={confirm.type}
        username={confirm.username}
        onClose={closeConfirm}
        onConfirm={onConfirm}
      />
    </>
  );
};
