import React, { useState } from 'react';

const ChatUserStatus = ({ setChatStatus }) => {
  const [status, setStatus] = useState('online');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setChatStatus(e.target.value);
  };

  return (
    <div className="chat-user-status">
      <select value={status} onChange={handleStatusChange}>
        <option value="ONLINE">Online</option>
        <option value="OFFLINE">Offline</option>
      </select>
    </div>
  );
};

export default ChatUserStatus;
