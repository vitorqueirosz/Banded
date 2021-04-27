export const setUserSession = (accessToken: string, userId: string) => {
  localStorage.setItem('@Banded:token', accessToken);
  localStorage.setItem('@Banded:user', userId);
};

export const isUserAuthenticated = () => localStorage.getItem('@Banded:token');
export const getUserIdOnSession = () => localStorage.getItem('@Banded:user');

export const setUnathorizedUser = () => {
  localStorage.removeItem('@Banded:token');
  localStorage.removeItem('@Banded:user');
};
