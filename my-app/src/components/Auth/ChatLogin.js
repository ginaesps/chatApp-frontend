import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const ChatLogin = () => {
  const [username, setUsername] = useState('');
  const [jwt, setJwt] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, jwt }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nickname"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="JWT"
        value={jwt}
        onChange={(e) => setJwt(e.target.value)}
      />
      <button type="submit">Enter chatroom</button>
    </form>
  );
};

export default ChatLogin;
