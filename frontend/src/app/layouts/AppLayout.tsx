import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '@widgets/header';

export const AppLayout: React.FC = () => {

  return (
    <div className="flex min-h-screen flex-1 flex-col gap-4 bg-transparent">
      <Header/>
      <main className="flex h-full flex-1 flex-col justify-center overflow-y-auto px-4 pt-2 pb-20 sm:px-6 sm:pb-8 md:px-8 lg:px-13 lg:pt-1 lg:pb-13">
        <Outlet/>
      </main>
    </div>
  );
};
