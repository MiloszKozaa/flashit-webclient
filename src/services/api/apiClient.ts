import { Response } from "../../models/Response";

export const CallApi = <TData>(
    endpoint : string, 
    method: 'GET' | 'POST' | 'PUT', 
    body: any, 
    onSuccess: (res : Response<TData>) => void, 
    onError: (err: string) => void) => {
  fetch('https://node-server-ochre.vercel.app/' + endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => onSuccess(data as Response<TData>))
    .catch(error => onError(error))
}