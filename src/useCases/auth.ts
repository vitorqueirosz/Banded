import { USERS, AUTH } from 'constants/endpoints';
import { useToast } from 'contexts';
import { useCache } from 'hooks/useCache';
import { useRequest } from 'hooks/useRequest';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUnathorizedUser, setUserSession } from 'utils/session';

type AuthParams = {
  email: string;
  password: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const api = useRequest();
  const { setToast } = useToast();
  const [isFetching, setIsFetching] = useState(false);
  const mutate = useCache(USERS.BASE);

  const handleAuthenticate = async (params: AuthParams) => {
    setIsFetching(true);
    try {
      const { data: { user, token } } = await api.post(AUTH.BASE, params);

      if (token) {
        setUserSession(token, user);
        navigate('/home');
        mutate(user);
      }
    } catch (error) {
      setIsFetching(false);
      setToast({
        title: 'Error',
        description: error.message || 'Invalid credentials',
        type: 'error',
      });
    }
  };

  return { handleAuthenticate, isFetching };
};

export const useSignOut = () => {
  const navigate = useNavigate();

  return () => {
    setUnathorizedUser();
    navigate('/login');
  };
};
