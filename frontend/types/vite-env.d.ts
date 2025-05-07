/// <reference types="vite/client" />

declare const window: Window & {
  AssistantHost?: {
    ready: boolean;
    // другие методы
  };
};
