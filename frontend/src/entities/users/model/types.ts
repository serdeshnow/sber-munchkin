// src/entities/users/types.ts
export interface PlayerSession {
  username: string;
  level: number;
  power: number;
}
export interface UserRecord {
  id: number;
  session: PlayerSession[];
}
