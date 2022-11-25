export const saveToken = (token: string) => {
  localStorage.setItem('x-auth-token', token);
};

export const getToken = () => {
  localStorage.getItem('x-auth-token');
};
