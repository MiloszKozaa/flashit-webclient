import { Response } from '../../models/Response';
import { fetchSettings } from './apiServices';

export const CallApi = <TData>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT',
  body: any | null,
  onSuccess: (res: Response<TData>) => void,
  onError: (err: string) => void,
  token?: string
) => {
  fetch(
    `https://node-server-ochre.vercel.app/${endpoint}`,
    fetchSettings(body, method, token)
  )
    .then(response => response.json())
    .then(data => onSuccess(data as Response<TData>))
    .catch(error => onError(error));
};
