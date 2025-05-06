import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initDB } from '../entities/users/model';
import '@styles/index.css';
import { VoiceProvider } from '@features/voiceCommands/useVoiceCommands';

async function bootstrap() {
  await initDB();
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <VoiceProvider>
      <App />
    </VoiceProvider>,
  );
}

bootstrap();
