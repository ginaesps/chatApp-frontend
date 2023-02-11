import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserStatus } from '../../redux/actions/userStatusActions';

const UserStatus = () => {
  const status = useSelector(state => state.user.status);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setUserStatus(e.target.value));
  };

  return (
    <div>
      <h3>User Status:</h3>
      <select value={status} onChange={handleChange}>
        <option value="ONLINE">Online</option>
        <option value="OFFLINE">Offline</option>
      </select>
    </div>
  );
};

export default UserStatus;
