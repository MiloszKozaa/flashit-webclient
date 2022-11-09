export const fetchSettings = (
  fetchBody: any,
  method: string,
  token?: string
) => {
  if (fetchBody) {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
      body: JSON.stringify(fetchBody),
    };
  } else {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    };
  }
};
