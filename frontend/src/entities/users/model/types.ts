export interface UserRecord {
  id: number;
  session: PlayerSession[];
}

export interface PlayerSession {
  username: string;
  level: number;
  power: number;
}
