import { SET_CURRENT_USER_STATUS } from './actionTypes';

export const setCurrentUserStatus = (status) => {
  return {
    type: SET_CURRENT_USER_STATUS,
    payload: status,
  };
};
