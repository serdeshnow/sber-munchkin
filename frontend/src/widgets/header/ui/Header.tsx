import React from 'react';
import { Button, Icon, Title } from '@shared/ui';
import { useGame } from '@app/providers/GameProvider.tsx';
import { useLocation, useNavigate } from 'react-router';

export const Header: React.FC = () => {
  const {users, openReset, openAdd} = useGame();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between bg-dark-gray-500 px-10 py-4 gap-50">
      <Title
        onClick={() => navigate('/')}
      >Манчкины</Title>
      {
        location.pathname === '/game' && (
          <div className="flex gap-3 w-full justify-end">
            <Button
              className="px-6 text-2xl w-auto"
              disabled={users.length >= 6}
              onClick={openAdd}>
              <Icon type="plus"/> Добавить манчкина
            </Button>
            <Button
              className="px-6 text-2xl w-auto"
              onClick={openReset}
            >
              <Icon type="restart"/>
              Рестарт
            </Button>
            <Button
              onClick={() => navigate('/support')}
              className="px-6 text-2xl w-auto"
              startContent={<Icon type="question" />}
            >
              Справка
            </Button>
          </div>
        )
      }
      {
        location.pathname === '/support' && (
          <div className="flex gap-3 w-full justify-end">
            <Button
              className="px-6 text-2xl w-auto"
              onClick={() => navigate(-1)}>
              <Icon type="arrowLeft"/> Назад
            </Button>
          </div>
        )
      }
    </header>
  );
};
