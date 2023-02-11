import React from 'react';
import ChatWindow from './ChatWindow';
import ChatUserList from './ChatUserList';
import ChatLogin from './ChatLogin';

const ChatRoom = () => {
  return (
    <div className="chat-room">
      <ChatLogin />
      <ChatWindow />
      <ChatUserList />
    </div>
  );
};

export default ChatRoom;
