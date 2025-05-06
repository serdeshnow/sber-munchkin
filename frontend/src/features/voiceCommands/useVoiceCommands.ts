// src/features/voiceCommands/useVoiceCommands.ts
import { useEffect } from 'react';
import { initVoiceAssistant } from '@shared/lib/voiceAssistant';
import { addUser, deleteUser, updateUser } from '@entities/users/model';
import type { PlayerSession } from '@entities/users/types';

export const useVoiceCommands = () => {
  useEffect(() => {
    const recognizer = initVoiceAssistant(async (text) => {
      const cmd = text.toLowerCase();
      if (cmd.includes('добавь игрока с именем')) {
        const name = cmd.split('именем')[1].trim();
        addUser({ username: name, level: 1, power: 1 });
      } else if (cmd.includes('удали игрока')) {
        const name = cmd.split('игрока')[1].trim();
        // поиск по имени
        const users = getAllUsers();
        const u = users.find((u) => u.session.username.toLowerCase() === name);
        if (u) deleteUser(u.id);
      } else if (cmd.includes('перезапусти игру')) {
        window.location.reload();
      }
      // TODO: level/power изменения, подтверждения
    });
    return () => recognizer.stop();
  }, []);
};
