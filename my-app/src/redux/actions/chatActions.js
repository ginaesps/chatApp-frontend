import { ADD_MESSAGE, SET_ROOM, SET_USERS } from './types';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
});

export const setRoom = (room) => ({
  type: SET_ROOM,
  payload: room
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});
