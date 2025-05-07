// src/entities/users/model.ts
import initSqlJs from 'sql.js';
import type { PlayerSession, UserRecord } from './types';

let db: any;
export async function initDB(): Promise<void> {
  const SQL = await initSqlJs({ locateFile: (file) => `/sql-wasm.wasm` });
  db = new SQL.Database();
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session TEXT
    );
  `);
}
export function getAllUsers(): UserRecord[] {
  const res = db.exec('SELECT id, session FROM users;')[0];
  if (!res) return [];
  return res.values.map(([id, sess]: [number, string]) => ({
    id,
    session: JSON.parse(sess),
  }));
}
export function addUser(session: PlayerSession) {
  db.run('INSERT INTO users (session) VALUES (?);', [JSON.stringify(session)]);
}
export function updateUser(id: number, fields: Partial<PlayerSession>) {
  const curr = db.exec('SELECT session FROM users WHERE id=?;', [id])[0].values[0][0];
  const updated = { ...JSON.parse(curr), ...fields };
  db.run('UPDATE users SET session=? WHERE id=?;', [JSON.stringify(updated), id]);
}
export function deleteUser(id: number) {
  db.run('DELETE FROM users WHERE id=?;', [id]);
}
