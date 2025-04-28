export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME || '', // Vite app
  API_URL: import.meta.env.VITE_API_URL || '', // http://localhost:8080/api
  ENV: import.meta.env.VITE_ENV || '', // development | production
};
