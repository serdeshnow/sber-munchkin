import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@app/layouts/AppLayout.tsx';
import { GamePage } from '@pages/game/Page.tsx';
import { MenuPage } from '@pages/menu/Page.tsx';
import { SupportPage } from '@pages/support/Page';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: MenuPage,
      },
      // Game
      {
        path: 'game',
        children: [
          {
            index: true,
            Component: GamePage,
          },
        ],
      },
      // support
      {
        path: 'support',
        children: [
          {
            index: true,
            Component: SupportPage,
          },
        ],
      },
    ],
  },
]);
