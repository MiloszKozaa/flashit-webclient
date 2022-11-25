import { Navigate, useNavigate } from 'react-router-dom';
import { UserResponse } from '../../models/User/UserResponse';
import { CallApi } from '../api/apiClient';
import { getToken } from '../tokenServices';

export const getUserInfo = (
  onSuccess: (res: UserResponse) => void,
  onError: (err: string) => void
) => {
  CallApi<UserResponse>(
    'user',
    'GET',
    null,
    res => {
      onSuccess(res);
    },
    err => {
      onError(err);
    }
  );
};
