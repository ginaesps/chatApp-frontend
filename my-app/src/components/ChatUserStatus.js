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
        <option value="online"></option>
        <option value="away">Away</option>
        <option value="busy">Busy</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
};
export default ChatUserStatus;