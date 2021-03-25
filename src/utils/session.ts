export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('@Banded:token', accessToken);
};

export const isUserAuthenticated = () => localStorage.getItem('@Banded:token');
