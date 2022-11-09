import { useState } from 'react';
import { UserResponse } from '../models/User/UserResponse';
import { useNavigate } from 'react-router-dom';
import { CallApi } from '../services/api/apiClient';

const FlashIt = () => {
  const navigator = useNavigate();
  const token = localStorage.getItem('x-auth-token') || undefined;
  const [userInfo, userInfoSet] = useState<UserResponse>();
  const getInfo = () => {
    CallApi(
      'user',
      'GET',
      null,
      res => {
        userInfoSet(res);
      },
      err => {
        console.error('Error:', err);
      },
      token
    );
  };

  return (
    <>
      <button
        onClick={() => {
          localStorage.clear();
          navigator('/');
        }}>
        Log Out
      </button>
      <button onClick={getInfo}>Get your account info</button>
      <div>id: {userInfo?.data._id}</div>
      <div>email: {userInfo?.data.email}</div>
      <div>username: {userInfo?.data.username}</div>
    </>
  );
};

export default FlashIt;
