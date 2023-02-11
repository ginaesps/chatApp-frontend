import {
    ADD_MESSAGE,
    ADD_USERS,
    SET_USERNAME,
    SET_CHAT_ROOM,
    SET_MESSAGE_LIST
  } from '../actions/chatActions';
  
  const initialState = {
    chatRoom: '',
    username: '',
    userList: [],
    messageList: [],
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CHAT_ROOM:
        return {
          ...state,
          chatRoom: action.payload
        };
      case SET_USERNAME:
        return {
          ...state,
          username: action.payload
        };
      case ADD_USERS:
        return {
          ...state,
          userList: [...state.userList, ...action.payload]
        };
      case ADD_MESSAGE:
        return {
          ...state,
          messageList: [...state.messageList, action.payload]
        };
      case SET_MESSAGE_LIST:
        return {
          ...state,
          messageList: action.payload
        };
      default:
        return state;
    }
  };
  
  export default chatReducer;
  