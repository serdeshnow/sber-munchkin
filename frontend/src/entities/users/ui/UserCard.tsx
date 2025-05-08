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

      <Card key={u.username} className="p-4 bg-dark-gray-500 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold">{u.username}</div>
            <div>Уровень: {u.level}</div>
            <div>Сила: {u.power}</div>
          </div>
          <div className="flex space-x-2">
            <Icon type="edit" onClick={() => {
              setTargetUser(u.username);
              setAddModalOpen(true);
              setNewName(u.username);
            }} />
            <Icon type="trash" onClick={() => onDeleteClick(u.username)} />
          </div>
        </div>
        <div className="mt-2 flex space-x-1">
          <Button size="sm" onClick={() => changeLevel(u.username, -1)}>- lvl</Button>
          <Button size="sm" onClick={() => changeLevel(u.username, +1)}>+ lvl</Button>
          <Button size="sm" onClick={() => changePower(u.username, -1)}>- pow</Button>
          <Button size="sm" onClick={() => changePower(u.username, +1)}>+ pow</Button>
        </div>
      </Card>
    </>
  );
};
