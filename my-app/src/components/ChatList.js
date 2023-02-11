import React from 'react';

const ChatList = ({ chatData, setSelectedUser }) => {
  return (
    <ul className="chat-list">
      {chatData.map((user) => (
        <li key={user.id} onClick={() => setSelectedUser(user)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
};

export default ChatList;