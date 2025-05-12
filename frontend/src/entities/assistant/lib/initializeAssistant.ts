import {
  AssistantAppState,
  createAssistant,
  createSmartappDebugger,
} from '@salutejs/client';

export const initializeAssistant = (
  getState: () => AssistantAppState & Record<string, any>,
) => {
  if (import.meta.env.MODE === 'development') {
    return createSmartappDebugger({
      token: import.meta.env.VITE_APP_TOKEN ?? '',
      initPhrase: `Запусти ${import.meta.env.VITE_APP_SMARTAPP}`,
      getState,
      nativePanel: {
        defaultText: 'ччччччч',
        screenshotMode: false,
        tabIndex: -1,
      },
    });
  }
  return createAssistant({getState});
};
