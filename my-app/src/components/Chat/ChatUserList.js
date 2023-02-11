import React from 'react';
import { useSelector } from 'react-redux';
import ChatUser from './ChatUser';

const ChatUserList = () => {
const users = useSelector(state => state.chatRoom.users);

return (
<div className="chat-user-list">
<h3>Online Users:</h3>
<ul>
{users.map(user => (
<ChatUser key={user.id} user={user} />
))}
</ul>
</div>
);
};

export default ChatUserList;