import React from 'react';
import { Button, Icon, Title } from '@shared/ui';
import { useGame } from '@app/providers/GameProvider.tsx';
import { useLocation, useNavigate } from 'react-router';

export const Header: React.FC = () => {
  const {users, openReset, openAdd} = useGame();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className="flex flex-wrap items-center justify-between bg-dark-gray-500 px-4 py-3 gap-4 sm:px-6 sm:py-4 md:px-10 md:gap-6 lg:gap-5">
      <Title
        onClick={() => navigate('/')}
      >Манчкины</Title>
      {
        location.pathname === '/game' && (
          <div className="flex gap-3 w-full justify-end">
            <Button
              className="w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base md:text-xl"
              disabled={users.length >= 6}
              onClick={openAdd}>
              <Icon type="plus"/>
              <span className="hidden md:inline">Добавить манчкина</span>
            </Button>
            <Button
              className="w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base md:text-xl"
              onClick={openReset}
            >
              <Icon type="restart"/>
              <span className="hidden md:inline">Рестарт</span>

            </Button>
            <Button
              onClick={() => navigate('/support')}
              className="w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base md:text-xl"
              startContent={<Icon type="question"/>}
            >
              <span className="hidden md:inline">Справка</span>
            </Button>
          </div>
        )
      }
      {
        location.pathname === '/support' && (
          <div className="flex gap-3 w-full justify-end">
            <Button
              className="w-full sm:w-auto px-4 sm:px-5 md:px-6 text-sm sm:text-base md:text-xl"
              onClick={() => navigate(-1)}>
              <Icon type="arrowLeft"/> <span>Назад</span>
            </Button>
          </div>
        )
      }
    </header>
  );
};
