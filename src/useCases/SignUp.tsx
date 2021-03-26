import { ENDPOINTS } from 'constants/endpoints';
import routes from 'constants/routes';
import { User } from 'contexts/SignUp';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setAccessToken } from 'utils/session';

export const useCreateUser = () => {
  const navigate = useNavigate();

  try {
    return async (params: User) => {
      const { data: { token } } = await api.post(ENDPOINTS.users, params);

      if (token) {
        setAccessToken(token);
        navigate(routes.auth.initial);
      }
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
