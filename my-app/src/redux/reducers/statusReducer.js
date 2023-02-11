import { SET_CURRENT_STATUS } from '../actions/statusActions';

const initialState = {
  currentStatus: 'online',
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STATUS:
      return {
        ...state,
        currentStatus: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
