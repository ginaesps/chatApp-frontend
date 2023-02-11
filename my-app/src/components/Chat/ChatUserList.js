import React from 'react';

const ChatUserList = ({ chatData, setSelectedUser }) => {
  return (
    <ul className="chat-user-list">
      {chatData.map((user) => (
        <li key={user.id} onClick={() => setSelectedUser(user)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
};

export default ChatUserList;