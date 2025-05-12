export interface UserRecord {
  id: number;
  session: PlayerSession[];
}

// src/entities/users/types.ts
export interface PlayerSession {
  username: string;
  level: number;
  power: number;
}
