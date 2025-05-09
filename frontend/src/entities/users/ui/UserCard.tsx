import React from 'react';
import { Button, Card, Icon } from '@shared/ui';
import type { PlayerSession } from '@entities/users/model/types.ts';

interface UserCardProps {
  user: PlayerSession;
}

export const UserCard: React.FC<UserCardProps> = ({user: u}) => {
  // TODO: throw logic inside


  return (
    <>
      <Card key={u.username} className="flex justify-between p-4 bg-dark-gray-500 rounded-lg">
        <div className="flex gap-5">
          <Button>
            <Icon type="trash" onClick={() => onDeleteClick(u.username)}/>
          </Button>
          <div className="font-bold">{u.username}</div>
        </div>

        <div className="flex w-full justify-end gap-5">
          <div className="flex bg-brown-500 rounded-xl">
            <Button size="sm" onClick={() => changeLevel(u.username, -1)}>
              <Icon type="arrowLeft"/>
            </Button>
            <p>{u.level} ур.</p>
            <Button size="sm" onClick={() => changeLevel(u.username, +1)}>
              <Icon type="arrowRight"/>
            </Button>
          </div>

          <div className="flex bg-brown-500 rounded-xl">
            <Button size="sm" onClick={() => changePower(u.username, -1)}>
              <Icon type="arrowLeft"/>
            </Button>
            <p>{u.power} мощь</p>
            <Button size="sm" onClick={() => changePower(u.username, +1)}>
              <Icon type="arrowRight"/>
            </Button>
          </div>

        </div>
      </Card>
    </>
  );
};
