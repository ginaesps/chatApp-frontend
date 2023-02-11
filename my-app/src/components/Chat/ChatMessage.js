import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message.username}: {message.message}</p>
    </div>
  );
};

export default ChatMessage;