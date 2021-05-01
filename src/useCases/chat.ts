import { USERS, MESSAGES } from 'constants/endpoints';
import { useFetch } from 'hooks/useFetch';
import { setUrlWithParams } from 'utils';

type User = {
  id: string;
  name: string;
  avatar?: string;
}

type Params = {
  name: string;
}

export const useChats = (params: Params) => {
  const url = setUrlWithParams(USERS.CHAT, params);
  const users = useFetch<User[]>(url);

  return {
    ...users,
  };
};

export const useLatestMessages = (chatId: string) => {
  const url = setUrlWithParams(MESSAGES.LATEST_MESSAGES(chatId));
  const latestMessages = useFetch<User[]>(url);

  return {
    ...latestMessages,
  };
};
