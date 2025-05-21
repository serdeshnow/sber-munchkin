import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '@widgets/header';

export const AppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header className="sticky top-0 z-50 shadow-sm" />
      <main className="relative flex-1 overflow-y-auto px-4 pt-4 pb-40 sm:px-6 sm:pb-8 md:px-8 lg:px-13 lg:pb-13">
        <Outlet />
      </main>
    </div>
  );
};
