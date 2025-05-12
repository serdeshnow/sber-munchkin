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
<<<<<<< HEAD:frontend/src/entities/users/types.ts
=======
export interface UserRecord {
  id: number;
  session: PlayerSession[];
}
>>>>>>> ee34ecc567bc76ab967235ecd10184897d394d91:frontend/src/entities/users/model/types.ts
