import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, sendMessage } from '../../redux/actions/chatMessageActions';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const messages = useSelector(state => state.chatMessage.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(message));
    setMessage('');
  };

  return (
    <div className="chat-window">
      <ul>
        {messages.map(m => (
          <ChatMessage key={m.id} message={m} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
