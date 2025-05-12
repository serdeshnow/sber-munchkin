import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '@widgets/header';

export const AppLayout: React.FC = () => {

  return (
    <div className="flex h-full flex-1 flex-col gap-5 bg-transparent">
      <Header/>
      <main className="flex h-full flex-1 flex-col overflow-y-auto px-13 pt-1 pb-13">
        <Outlet/>
      </main>
    </div>
  );
};
