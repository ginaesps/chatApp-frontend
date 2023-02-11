import React, { useEffect, useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import ChatUserStatus from '../Status/ChatUserStatus';
import { connect } from 'react-redux';
import { getChatData, setChatStatus } from '../../redux/actions/chatRoomActions';

const ChatRoom = ({ chatData, getChatData, setChatStatus }) => {
  useEffect(() => {
    getChatData();
  }, [getChatData]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-room">
      <ChatList chatData={chatData} setSelectedUser={setSelectedUser} />
      {selectedUser && (
        <ChatWindow
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
      <ChatUserStatus setChatStatus={setChatStatus} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  chatData: state.chat.chatData,
});

export default connect(mapStateToProps, { getChatData, setChatStatus })(
  ChatRoom
);