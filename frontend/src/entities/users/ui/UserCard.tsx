import React, { useRef, useEffect } from 'react';
import { Card, Button, Icon, Input, IconButton } from '@shared/ui';
import type { PlayerSession } from '@entities/users';

interface Props {
  user: PlayerSession;
  onDelete: (u: string) => void;
  onRename: (u: string) => void;
  editing: boolean;
  newName: string;
  setNewName: (s: string) => void;
  onSaveRename: () => void;
  onCancelRename: () => void;
  onLevelChange: (u: string, delta: number) => void;
  onPowerChange: (u: string, delta: number) => void;
}

export const UserCard: React.FC<Props> = ({
  user,
  onDelete,
  onRename,
  editing,
  newName,
  setNewName,
  onSaveRename,
  onCancelRename,
  onLevelChange,
  onPowerChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  return (
    <Card className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-dark-gray-500">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <IconButton icon="trash" onClick={() => onDelete(user.username)} />

        {editing ? (
          <Input
            ref={inputRef}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={onSaveRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSaveRename();
              if (e.key === 'Escape') onCancelRename();
            }}
          />
        ) : (
          <p className="font-bold cursor-pointer" onClick={() => onRename(user.username)}>
            {user.username}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col justify-center items-center gap-5  sm:justify-end sm:flex-row">
        <div className="flex items-center rounded-xl bg-brown-500 w-full justify-between sm:w-auto sm:justify-center">
          <Button
            size="sm"
            className="px-2 py-1"
            onClick={() => onLevelChange(user.username, -1)}
          >
            <Icon type="arrowLeft" />
          </Button>
          <span className="px-2 font-semibold  whitespace-nowrap text-sm sm:text-base ">
            {user.level} ур.
          </span>
          <Button
            size="sm"
            className="px-2 py-1"
            onClick={() => onLevelChange(user.username, +1)}
          >
            <Icon type="arrowRight" />
          </Button>
        </div>

        <div className="flex items-center rounded-xl bg-brown-500 w-full justify-between sm:w-auto sm:justify-center">
          <Button
            size="sm"
            className="px-2 py-1"
            onClick={() => onPowerChange(user.username, -1)}
          >
            <Icon type="arrowLeft" />
          </Button>
          <span className="px-2 font-semibold  whitespace-nowrap text-sm sm:text-base">
            {user.power} мощь
          </span>
          <Button
            size="sm"
            className="px-2 py-1"
            onClick={() => onPowerChange(user.username, +1)}
          >
            <Icon type="arrowRight" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
