import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import {
  type ActionType,
  type AppState,
  type AssistantAction,
  initializeAssistant,
} from '@entities/assistant';
import type { PlayerSession } from '@entities/users';

export const initialUsersState: PlayerSession[] = [];

export const useAssistant = () => {
  // всегда храним username в lowercase
  const [users, setUsers] = useState<PlayerSession[]>(initialUsersState);
  const assistantRef = useRef<any>(null);

  // --- CRUD с нормализацией имён при добавлении и переименовании ---
  const resetGame = useCallback(() => {
    setUsers((prev) => prev.map((u) => ({ ...u, level: 1, power: 1 })));
  }, []);

  const addUser = useCallback((username: string) => {
    const name = username.toLowerCase();
    setUsers((prev) => {
      if (prev.length >= 7) throw new Error('MaxPlayers');
      return [...prev, { username: name, level: 1, power: 1 }];
    });
  }, []);

  const deleteUser = useCallback((username: string) => {
    const name = username.toLowerCase();
    setUsers((prev) => prev.filter((u) => u.username !== name));
  }, []);

  const renameUser = useCallback((username: string, newUsername: string) => {
    const from = username.toLowerCase();
    const to = newUsername.toLowerCase();
    setUsers((prev) =>
      prev.map((u) => (u.username === from ? { ...u, username: to } : u)),
    );
  }, []);

  const changeLevel = useCallback((username: string, delta: number) => {
    const name = username.toLowerCase();
    setUsers((prev) =>
      prev.map((u) => {
        if (u.username !== name) return u;
        const newLevel = Math.max(1, u.level + delta);

        let newPower = u.power;
        if (delta > 0 && u.power < newLevel) {
          newPower = Math.max(0, u.power + delta);
        }

        return {
          ...u,
          level: newLevel,
          power: newPower,
        };
      }),
    );
  }, []);

  const changePower = useCallback((username: string, delta: number) => {
    if (Number.isNaN(delta)) return;
    const name = username.toLowerCase();
    setUsers((prev) =>
      prev.map((u) => {
        if (u.username !== name) return u;
        const newPower = Math.max(0, u.power + delta);
        return { ...u, power: newPower };
      }),
    );
  }, []);

  // приводим incoming-action.username к lowercase
  const dispatchAssistantAction = useCallback(
    (action: AssistantAction) => {
      // нормализуем имена из команды
      if (action.username) action.username = action.username.toLowerCase();
      if (action.newUsername) action.newUsername = action.newUsername.toLowerCase();

      try {
        switch (action.type as ActionType) {
          case 'reset_game':
            resetGame();
            break;
          case 'add_user':
            action.username && addUser(action.username);
            break;
          case 'delete_user':
            action.username && deleteUser(action.username);
            break;
          case 'rename_user':
            action.username &&
              action.newUsername &&
              renameUser(action.username, action.newUsername);
            break;
          case 'increase_user_level':
            action.username && changeLevel(action.username, +1);
            console.log('decrease_user_level', action.username, action);
            break;
          case 'decrease_user_level':
            action.username && changeLevel(action.username, -1);
            console.log('decrease_user_level', action.username);
            break;
          case 'increase_user_power':
            if (action.username && action.power != null) {
              const delta = Number(action.power);
              if (!Number.isNaN(delta)) {
                changePower(action.username, delta);
              } else {
                console.warn('Не удалось распознать power:', action.power);
              }
            }
            break;
          case 'decrease_user_power':
            if (action.username && action.power != null) {
              const delta = Number(action.power);
              if (!Number.isNaN(delta)) {
                changePower(action.username, -delta);
              } else {
                console.warn('Не удалось распознать power:', action.power);
              }
            }
            break;
          default:
            console.warn('Unknown action:', action.type);
        }
      } catch (e: any) {
        if (e.message === 'MaxPlayers') {
          console.warn('Нельзя добавить больше 7 игроков');
        } else {
          throw e;
        }
      }
    },
    [resetGame, addUser, deleteUser, renameUser, changeLevel, changePower],
  );

  // состояние для ассистента
  const getState = useCallback<() => AppState>(
    () => ({
      item_selector: {
        items: users.map(({ username, level, power }) => ({
          username, // всё ещё lowercase
          level,
          power,
        })),
        ignored_words: [
          'добавить',
          'установить',
          'запиши',
          'поставь',
          'закинь',
          'напомнить',
          'удалить',
          'удали',
          'выполни',
          'выполнил',
          'сделал',
        ],
      },
    }),
    [users],
  );

  // инициализация ассистента
  useEffect(() => {
    const assistant = initializeAssistant(getState);
    assistantRef.current = assistant;
    assistant.on('data', ({ action }: any) => {
      action && dispatchAssistantAction(action);
    });
    assistant.on('start', () =>
      console.log('assistant.start', assistant.getInitialData()),
    );
    assistant.on('error', console.error);
    return () => {
      assistantRef.current = null;
    };
  }, [getState, dispatchAssistantAction]);

  // для UI: копируем users, но делаем username с заглавной буквы
  const displayedUsers = useMemo(
    () =>
      users.map((u) => ({
        ...u,
        username: u.username.charAt(0).toUpperCase() + u.username.slice(1),
      })),
    [users],
  );

  return {
    users: displayedUsers,
    resetGame,
    addUser,
    deleteUser,
    renameUser,
    changeLevel,
    changePower,
  };
};
