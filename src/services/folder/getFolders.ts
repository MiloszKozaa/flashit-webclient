import { folderResponse } from '../../models/folder/folderResponse';
import { CallApi } from '../api/apiClient';

export const getFolders = (
  onSuccess: (res: folderResponse) => void,
  onError: (err: string) => void
) => {
  CallApi<folderResponse>(
    'folder',
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
