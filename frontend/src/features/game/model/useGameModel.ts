import { useState } from 'react';
import { useAssistant } from '@features/assistant';
import { names } from '@features/game';

export const useGameModel = () => {
  const { users, addUser, deleteUser, renameUser, resetGame, changeLevel, changePower } =
    useAssistant();

  // ---- ConfirmModal state ----
  const [confirm, setConfirm] = useState<{ type: 'reset' | 'delete'; username?: string; open: boolean }>({
    type: 'reset',
    open: false,
  });

  // ---- Inline-editing state ----
  const [editing, setEditing] = useState<string | null>(null);
  const [newName, setNewName] = useState('');

  // Закрыть confirm
  const closeConfirm = () => setConfirm((c) => ({ ...c, open: false }));

  // Открыть confirm delete
  const openDelete = (username: string) =>
    setConfirm({ type: 'delete', username, open: true });

  // Открыть confirm reset
  const openReset = () => setConfirm({ type: 'reset', open: true });

  const onConfirm = () => {
    if (confirm.type === 'delete' && confirm.username) {
      deleteUser(confirm.username);
    } else {
      resetGame();
    }
    closeConfirm();
  };

  // ---- Добавление нового игрока без модалки ----
  const openAdd = () => {
    // генерируем имя по умолчанию
    const defaultName = `${names[users.length]}`;
    addUser(defaultName);
    // тут же входим в inline-редактирование
    setEditing(defaultName);
    setNewName(defaultName);
  };

  // ---- Inline-переименование ----
  const openRename = (username: string) => {
    setEditing(username);
    setNewName(username);
  };
  const saveRename = () => {
    if (!editing) return;
    const trimmed = newName.trim();
    if (trimmed && trimmed !== editing) {
      renameUser(editing, trimmed);
    }
    setEditing(null);
    setNewName('');
  };
  const cancelRename = () => {
    // если это вновь добавленный пользователь с именем default → можно удалить
    if (editing && newName.trim() === '') {
      deleteUser(editing);
    }
    setEditing(null);
    setNewName('');
  };

  return {
    users,
    confirm,
    openDelete,
    openReset,
    closeConfirm,
    onConfirm,

    openAdd,

    editing,
    newName,
    setNewName,
    openRename,
    saveRename,
    cancelRename,

    changeLevel,
    changePower,
  };
};
