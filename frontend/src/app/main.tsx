import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { App } from '@app/App.tsx';
import '@styles/index.css';

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <App/>
  </HeroUIProvider>,
);
