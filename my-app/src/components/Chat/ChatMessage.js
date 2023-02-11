import React from 'react';
import { useSelector } from 'react-redux';

const ChatMessage = () => {
const messages = useSelector(state => state.chat.messages);

return (
<div className="chat-message-list">
{messages.map(message => (
<div key={message.id} className="chat-message">
<div className="chat-message-username">{message.username}</div>
<div className="chat-message-text">{message.text}</div>
</div>
))}
</div>
);
};

export default ChatMessage;