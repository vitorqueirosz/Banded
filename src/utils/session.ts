import { User } from 'contexts';

export const setUserSession = (accessToken: string, user: User) => {
  localStorage.setItem('@Banded:token', accessToken);
  localStorage.setItem('@Banded:user', JSON.stringify(user));
};

export const isUserAuthenticated = () => localStorage.getItem('@Banded:token');
