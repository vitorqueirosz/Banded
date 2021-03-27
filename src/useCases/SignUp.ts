import { ENDPOINTS } from 'constants/endpoints';
import { ROUTES } from 'constants/routes';
import { User } from 'contexts/SignUp';
import { useCache } from 'hooks/useCache';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setUserSession } from 'utils/session';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const mutate = useCache(ENDPOINTS.users);

  try {
    return async (params: User) => {
      const { data: { user, token } } = await api.post(ENDPOINTS.users, params);

      if (token) {
        setUserSession(token, user);
        navigate(ROUTES.app.home);
        mutate(user);
      }
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
