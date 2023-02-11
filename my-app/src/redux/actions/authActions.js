import { LOGIN_USER } from './types';

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData,
});
