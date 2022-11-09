export const saveToken = (token: string) => {
  localStorage.setItem('x-auth-token', token);
};
