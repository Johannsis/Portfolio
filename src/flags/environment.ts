import 'server-only';

export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
