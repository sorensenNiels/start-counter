import { createServerFn } from '@tanstack/react-start';

export const getClientConfig = createServerFn({ method: 'GET' }).handler(() => {
  return {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    ENVIRONMENT: process.env.NODE_ENV
  };
});
