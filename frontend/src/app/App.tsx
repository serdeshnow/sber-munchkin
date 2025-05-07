// src/app/App.tsx
// import React from 'react';
import { PlayerList } from '../features/playerList/PlayerList';
// import { useVoiceCommands } from '../features/voiceCommands/useVoiceCommands';

export default function App() {
  // useVoiceCommands();
  return (
    <div className="min-h-screen bg-green-200 p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Манчкины</h1>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => window.location.reload()}
        >
          Рестарт
        </button>
      </header>
      <PlayerList />
    </div>
  );
}
