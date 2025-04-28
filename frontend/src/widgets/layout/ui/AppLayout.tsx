import React from 'react';
import { Outlet } from 'react-router';

export const AppLayout: React.FC = () => {

  return (
    <section className="">
      <main className="">
        <Outlet />
      </main>
    </section>
  );
};
