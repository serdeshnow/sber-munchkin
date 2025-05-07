import { useState, useRef, useCallback, useEffect } from 'react';
import {
  type ActionType,
  type AppState,
  type AssistantAction,
  initializeAssistant,
} from '@entities/assistant';
import type { PlayerSession } from '@entities/users';

export const useAssistant = () => {
  const [users, setUsers] = useState<PlayerSession[]>([
    { username: 'Игрок', level: 1, power: 1 },
  ]);
  const assistantRef = useRef<any>(null);

  // Состояние для ассистента
  const getState = useCallback<() => AppState>(
    () => ({
      item_selector: {
        items: users.map(({ username, level, power }) => ({ username, level, power })),
        ignored_words: [
          'добавить', 'установить', 'запиши', 'поставь', 'закинь',
          'напомнить', 'удалить', 'удали', 'выполни', 'выполнил', 'сделал',
        ],
      },
    }),
    [users],
  );

  // CRUD-методы
  const resetGame = useCallback(() => {
    setUsers(prev => prev.map(u => ({ ...u, level: 1, power: 1 })));
  }, []);

  const addUser = useCallback((username: string) => {
    setUsers(prev => {
      if (prev.length >= 7) {
        throw new Error('MaxPlayers');
      }
      return [...prev, { username, level: 1, power: 1 }];
    });
  }, []);

  const deleteUser = useCallback((username: string) => {
    setUsers(prev => prev.filter(u => u.username !== username));
  }, []);

  const renameUser = useCallback((username: string, newUsername: string) => {
    setUsers(prev =>
      prev.map(u => (u.username === username ? { ...u, username: newUsername } : u))
    );
  }, []);

  const changeLevel = useCallback((username: string, delta: number) => {
    setUsers(prev =>
      prev.map(u =>
        u.username === username
          ? { ...u, level: Math.max(1, u.level + delta) }
          : u
      )
    );
  }, []);

  const changePower = useCallback((username: string, delta: number) => {
    setUsers(prev =>
      prev.map(u =>
        u.username === username
          ? { ...u, power: Math.max(0, u.power + delta) }
          : u
      )
    );
  }, []);

  // Диспетчер событий ассистента
  const dispatchAssistantAction = useCallback(
    (action: AssistantAction) => {
      try {
        switch (action.type as ActionType) {
          case 'reset_game':     resetGame(); break;
          case 'add_user':       action.username && addUser(action.username); break;
          case 'delete_user':    action.username && deleteUser(action.username); break;
          case 'rename_user':    action.username && action.newUsername && renameUser(action.username, action.newUsername); break;
          case 'increase_user_level': action.username && changeLevel(action.username, +1); break;
          case 'decrease_user_level': action.username && changeLevel(action.username, -1); break;
          case 'increase_user_power': action.username && action.power && changePower(action.username, +Number(action.power)); break;
          case 'decrease_user_power': action.username && action.power && changePower(action.username, -Number(action.power)); break;
          default: console.warn('Unknown action:', action.type);
        }
      } catch (e: any) {
        if (e.message === 'MaxPlayers') {
          // сюда можно вставить callback или внешнее оповещение
          console.warn('Нельзя добавить больше 7 игроков');
        } else {
          throw e;
        }
      }
    },
    [resetGame, addUser, deleteUser, renameUser, changeLevel, changePower],
  );

  // Инициализация ассистента
  useEffect(() => {
    const assistant = initializeAssistant(getState);
    assistantRef.current = assistant;

    assistant.on('data', ({ action }: any) => {
      action && dispatchAssistantAction(action);
    });
    assistant.on('start', () => console.log('assistant.start', assistant.getInitialData()));
    assistant.on('error', console.error);

    return () => {
      assistantRef.current = null;
    };
  }, [getState, dispatchAssistantAction]);

  return {
    users,
    // UI-методы
    resetGame,
    addUser,
    deleteUser,
    renameUser,
    changeLevel,
    changePower,
  };
};
