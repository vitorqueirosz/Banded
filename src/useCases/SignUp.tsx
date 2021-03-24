import { ENDPOINTS } from 'constants/endpoints';
import { User } from 'contexts/SignUp';
import { api } from 'services/api';

export const useCreateUser = () => {
  try {
    return async (params: User) => {
      await api.post(ENDPOINTS.users, params);
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
