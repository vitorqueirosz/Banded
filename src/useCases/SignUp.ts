import { USERS } from 'constants/endpoints';
import { User } from 'contexts/SignUp';
import { useCache } from 'hooks/useCache';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setUserSession } from 'utils/session';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const mutate = useCache(USERS.BASE);

  try {
    return async (params: User) => {
      const { data: { user, token } } = await api.post(USERS.BASE, params);

      if (token) {
        setUserSession(token, user);
        navigate('/home');
        mutate(user);
      }
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
