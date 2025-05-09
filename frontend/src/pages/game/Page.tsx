import React, { useState } from 'react';
import { useAssistant } from '@features/assistant';
import { Button, Icon, Modal } from '@shared/ui';
import { UserCard } from '@entities/users';
import { Header } from '@widgets/header';

export const GamePage: React.FC = () => {
  const { users, addUser, deleteUser, renameUser, resetGame, changeLevel, changePower } =
    useAssistant();

  // Локальный state для модалок
  const [isConfirmModal, setConfirmModal] = useState<{
    type: 'reset' | 'delete';
    username?: string;
    open: boolean;
  }>({ type: 'reset', open: false });

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [targetUser, setTargetUser] = useState<string | null>(null);

  // Хендлер открытия удаления
  const onDeleteClick = (username: string) => {
    setConfirmModal({ type: 'delete', username, open: true });
  };

  // Подтверждение в модалке
  const onConfirm = () => {
    if (isConfirmModal.type === 'delete' && isConfirmModal.username) {
      deleteUser(isConfirmModal.username);
    } else if (isConfirmModal.type === 'reset') {
      resetGame();
    }
    setConfirmModal({ ...isConfirmModal, open: false });
  };

  return (
    <div className='flex flex-col h-full gap-5'>
      <Header />
      {/* Список игроков */}
      <div className="flex flex-col gap-4 px-5 py-10">
        {users.map((u) => (
          <UserCard user={u} />
        ))}
      </div>

      {/* Модалка подтверждения */}
      <Modal
        isOpen={isConfirmModal.open}
        onClose={() => setConfirmModal({ ...isConfirmModal, open: false })}
        title={
          isConfirmModal.type === 'reset'
            ? 'Сбросить всю игру?'
            : `Удалить игрока «${isConfirmModal.username}»?`
        }
      >
        <div className="space-x-2 flex justify-end">
          <Button
            variant="solid"
            onClick={() => setConfirmModal({ ...isConfirmModal, open: false })}
          >
            Отмена
          </Button>
          <Button color="error" onClick={onConfirm}>
            Да, подтвердить
          </Button>
        </div>
      </Modal>

      {/* Модалка добавления/переименования */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setAddModalOpen(false);
          setTargetUser(null);
          setNewName('');
        }}
        title={targetUser ? 'Переименовать игрока' : 'Добавить игрока'}
      >
        <div className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Имя игрока"
          />
          <div className="flex justify-end space-x-2">
            <Button variant="solid" onClick={() => setAddModalOpen(false)}>
              Отмена
            </Button>
            <Button
              onClick={() => {
                try {
                  if (targetUser) {
                    renameUser(targetUser, newName.trim());
                  } else {
                    addUser(newName.trim());
                  }
                  setAddModalOpen(false);
                  setTargetUser(null);
                  setNewName('');
                } catch (e: any) {
                  if (e.message === 'MaxPlayers') {
                    alert('В игре не может быть больше 7 манчкинов');
                  }
                }
              }}
            >
              {targetUser ? 'Переименовать' : 'Добавить'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
