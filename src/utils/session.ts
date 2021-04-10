import { User } from 'interfaces';

export const setUserSession = (accessToken: string, user: User) => {
  localStorage.setItem('@Banded:token', accessToken);
  localStorage.setItem('@Banded:user', JSON.stringify(user));
};

export const isUserAuthenticated = () => localStorage.getItem('@Banded:token');

export const setUnathorizedUser = () => {
  localStorage.removeItem('@Banded:token');
  localStorage.removeItem('@Banded:user');
};
