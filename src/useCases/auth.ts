import { ENDPOINTS } from 'constants/endpoints';
import { ROUTES } from 'constants/routes';
import { useToast } from 'contexts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setAccessToken } from 'utils/session';

type AuthParams = {
  email: string;
  password: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const { setToast } = useToast();
  const [isFetching, setIsFetching] = useState(false);

  const handleAuthenticate = async (params: AuthParams) => {
    setIsFetching(true);
    try {
      const { data: { token } } = await api.post(ENDPOINTS.auth, params);

      if (token) {
        setAccessToken(token);
        navigate(ROUTES.app.home);
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
