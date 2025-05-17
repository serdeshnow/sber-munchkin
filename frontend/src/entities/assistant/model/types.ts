import { AssistantAppState } from '@salutejs/client';
import type { PlayerSession } from '@entities/users';

export interface ItemSelectorState {
  items: PlayerSession[];
  ignored_words: string[];
}

export interface AssistantAppCustomState {
  item_selector: ItemSelectorState;
}

export type ActionType =
  | 'reset_game'
  | 'add_user'
  | 'delete_user'
  | 'rename_user'
  | 'increase_user_level'
  | 'decrease_user_level'
  | 'increase_user_power'
  | 'decrease_user_power';

export interface AssistantAction {
  type: ActionType;
  username: string;
  newUsername?: string;
  power?: string;
}

export type AppState = AssistantAppState & AssistantAppCustomState;
