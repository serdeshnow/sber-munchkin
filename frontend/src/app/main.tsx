import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { GameProvider } from '@app/providers/GameProvider.tsx';
import { RouterProvider } from 'react-router';
import { router } from '@app/providers/router.tsx';
import '@styles/index.css';

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <GameProvider>
      <RouterProvider router={router}/>
    </GameProvider>
  </HeroUIProvider>,
);
