import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@widgets/layout';
import { HomePage } from '@pages/home';
// import { Bot } from '@features/bot';
// import { AddSchedulePage } from '@pages/add-schedule';
// import { ScheduleTablePage } from '@pages/schedule-table';
// import { AboutPage } from '@/pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      // {
      //   path: '/sber',
      //   Component: Bot,
      // },
      // {
      //   path: '/add-schedule',
      //   Component: AddSchedulePage,
      // },
      // {
      //   path: '/schedule/:id',
      //   Component: ScheduleTablePage,
      // },
    ],
  },
  // {
  //   path: '/',
  //   element: <LandingPage />,
  // },
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
]);
