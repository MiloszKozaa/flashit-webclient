export const CallApi = <TData>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT',
  body: any | null,
  onSuccess: (res: TData) => void,
  onError: (err: string) => void
) => {
  const token = localStorage.getItem('x-auth-token')
    ? localStorage.getItem('x-auth-token')
    : '';
  if (method !== 'GET') {
    fetch(`https://node-server-ochre.vercel.app/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => onSuccess(data as TData))
      .catch(error => onError(error));
  } else {
    fetch(`https://node-server-ochre.vercel.app/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    })
      .then(response => response.json())
      .then(data => onSuccess(data as TData))
      .catch(error => onError(error));
  }
};

// export class ApiRestService {
//   CallApi = <TData>(
//     endpoint: string,
//     method: 'GET' | 'POST' | 'PUT',
//     body: any | null,
//     onSuccess: (res: TData) => void,
//     onError: (err: string) => void
//   ) => {
//     const token = localStorage.getItem('x-auth-token') ? '' : localStorage.getItem('x-auth-token');
//     fetch(`https://node-server-ochre.vercel.app/${endpoint}`, {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': `${token}`,
//       },
//       body: JSON.stringify(body),
//     })
//       .then(response => response.json())
//       .then(data => onSuccess(data as TData))
//       .catch(error => onError(error));
//   };

//   CallApi = <TData>(
//     endpoint: string,
//     method: 'GET' | 'POST' | 'PUT',
//     onSuccess: (res: TData) => void,
//     onError: (err: string) => void
//   ) => {
//     const token = localStorage.getItem('x-auth-token') ? '' : localStorage.getItem('x-auth-token');
//     fetch(`https://node-server-ochre.vercel.app/${endpoint}`, {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': `${token}`,
//       }
//     })
//       .then(response => response.json())
//       .then(data => onSuccess(data as TData))
//       .catch(error => onError(error));
//   };
// }

// export const CallApi = <TData>(
//   endpoint: string,
//   method: 'GET' | 'POST' | 'PUT',
//   onSuccess: (res: TData) => void,
//   onError: (err: string) => void
// ) => {
//   const token = localStorage.getItem('x-auth-token') ? '' : localStorage.getItem('x-auth-token');
//   fetch(`https://node-server-ochre.vercel.app/${endpoint}`, {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json',
//       'x-auth-token': `${token}`,
//     },
//     body: JSON.stringify(body),
//   })
//     .then(response => response.json())
//     .then(data => onSuccess(data as TData))
//     .catch(error => onError(error));
// };
