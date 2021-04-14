import { USERS } from 'constants/endpoints';
import { UserPayload } from 'contexts/SignUp';
import { useCache } from 'hooks/useCache';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import { setUserSession } from 'utils/session';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const mutate = useCache(USERS.BASE);

  try {
    return async (params: UserPayload) => {
      const formData = new FormData();

      Object.entries(params).forEach(([key, value]) => {
        if (key !== 'userMusician') {
          formData.append(key, String(value));
        }

        if (key === 'userMusician') {
          formData.append(key, JSON.stringify(value));
        }
      });

      params.userMusician?.albums?.forEach(({ album_image }) => {
        formData.append('album_image', album_image);
      });

      const { data: { user, token } } = await api.post(USERS.BASE, formData);
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
