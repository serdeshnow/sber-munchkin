import React, { useState, useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import {
  AssistantAppState,
  createAssistant,
  createSmartappDebugger,
} from '@salutejs/client';
// import './styles.css';
import { PlayerSession } from '@entities/users/types';

interface ItemSelectorState {
  items: PlayerSession[];
  ignored_words: string[];
}

interface AssistantAppCustomState {
  item_selector: ItemSelectorState;
}

type ActionType =
  | 'reset_game'
  | 'add_user'
  | 'delete_user'
  | 'rename_user'
  | 'increase_user_level'
  | 'decrease_user_level'
  | 'increase_user_power'
  | 'decrease_user_power';

interface AssistantAction {
  type: ActionType;
  username: string;
  newUsername: string;
  power: string;
}

// инициализация ассистента по примеру из документации
const initializeAssistant = (
  getState: () => AssistantAppState & AssistantAppCustomState
) => {
  if (import.meta.env.MODE === 'development') {
    return createSmartappDebugger({
      token: import.meta.env.VITE_APP_TOKEN ?? '',
      initPhrase: `Запусти ${import.meta.env.VITE_APP_SMARTAPP}`,
      getState,
      nativePanel: {
        defaultText: 'ччччччч',
        screenshotMode: false,
        tabIndex: -1,
      },
    });
  }
  return createAssistant({ getState });
};

export const Assistant: React.FC = () => {
  const [Users, setUsers] = useState<PlayerSession[]>([
    { username: 'Игрок', level: 1, power: 1 },
  ]);
  const assistantRef = useRef<any>(null);

  // состояние для ассистента
  const getStateForAssistant = useCallback<
    () => AssistantAppState & AssistantAppCustomState
  >(() => ({
    item_selector: {
      items: Users.map(({ username, level, power }) => ({ username, level, power })),
      ignored_words: [
        'добавить', 'установить', 'запиши', 'поставь', 'закинь',
        'напомнить', 'удалить', 'удали', 'выполни', 'выполнил', 'сделал'
      ],
    },
  }), [Users]);

  // методы управления пользователями
  const resetGame = useCallback(() => {
    setUsers(prev => prev.map(u => ({ ...u, level: 1, power: 1 })));
  }, []);

  const addUser = useCallback((username: string) => {
    setUsers(prev => [...prev, { username, level: 1, power: 1 }]);
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
          ? { ...u, level: u.level + delta, power: u.power + delta }
          : u
      )
    );
  }, []);

  const changePower = useCallback((username: string, delta: number) => {
    setUsers(prev =>
      prev.map(u => (u.username === username ? { ...u, power: u.power + delta } : u))
    );
  }, []);

  // обработка действий от ассистента
  const dispatchAssistantAction = useCallback(
    (action: AssistantAction) => {
      switch (action.type) {
        case 'reset_game':
          resetGame();
          break;
        case 'add_user':
          addUser(action.username);
          break;
        case 'delete_user':
          deleteUser(action.username);
          break;
        case 'rename_user':
          renameUser(action.username, action.newUsername);
          break;
        case 'increase_user_level':
          changeLevel(action.username, 1);
          break;
        case 'decrease_user_level':
          changeLevel(action.username, -1);
          break;
        case 'increase_user_power':
          changePower(action.username, Number(action.power));
          break;
        case 'decrease_user_power':
          changePower(action.username, -Number(action.power));
          break;
        default:
          console.warn('Unknown action:', action.type);
      }
    },
    [resetGame, addUser, deleteUser, renameUser, changeLevel, changePower]
  );

  // настройка слушателей ассистента
  useEffect(() => {
    const assistant = initializeAssistant(getStateForAssistant);
    assistantRef.current = assistant;

    assistant.on('data', (event: any) => {
      if (event.action) {
        dispatchAssistantAction(event.action);
      }
    });

    assistant.on('start', () =>
      console.log('assistant.on(start)', assistant.getInitialData())
    );
    assistant.on('command', console.log);
    assistant.on('error', console.error);
    assistant.on('tts', console.log);
  }, [getStateForAssistant, dispatchAssistantAction]);

  // рендер списка пользователей
  return (
    <div className={cn('p-4 bg-black')}>
      {Users.map(u => (
        <div key={u.username} className={cn('mb-2')}>
          {`${u.username} (Уровень: ${u.level}, Сила: ${u.power})`}
        </div>
      ))}
    </div>
  );
};
