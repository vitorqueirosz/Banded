import { ENDPOINTS } from 'constants/endpoints';
import { useToast } from 'contexts';
import { useCache } from 'hooks/useCache';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setUserSession } from 'utils/session';

type AuthParams = {
  email: string;
  password: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const { setToast } = useToast();
  const [isFetching, setIsFetching] = useState(false);
  const mutate = useCache(ENDPOINTS.users);

  const handleAuthenticate = async (params: AuthParams) => {
    setIsFetching(true);
    try {
      const { data: { user, token } } = await api.post(ENDPOINTS.auth, params);

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
