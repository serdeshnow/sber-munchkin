import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { RouterProvider } from 'react-router';
import { router } from '@app/providers/router.tsx';
import '@styles/index.css';

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <RouterProvider router={router}/>
  </HeroUIProvider>,
);
