import { USERS, MESSAGES, SOCKET } from 'constants/endpoints';
import { useSocketChat } from 'contexts';
import { useMutateByUrl, useSocketListener } from 'hooks';
import { useFetch } from 'hooks/useFetch';
import {
  JoinnedChannelData,
  LatestMessagesList,
  Message,
  UserChatMessage,
} from 'interfaces';
import { useCallback, useEffect } from 'react';
import { setUrlWithParams } from 'utils';

const { NEW_MESSAGE, JOINNED_PRIVATE_CHANNEL } = SOCKET;

type Params = {
  name: string;
};

export const useChats = (params: Params) => {
  const { socket, setRoom, latestMessagesUrl } = useSocketChat();
  const url = setUrlWithParams(USERS.USER_CHATS, params);
  const users = useFetch<UserChatMessage[]>(url);
  const latestMessagesKey = 'latestMessages';
  const mutate = useMutateByUrl(
    latestMessagesUrl,
    () => undefined,
    latestMessagesKey,
  );

  const onNewMessage = useCallback(
    (data: Message) => {
      mutate(data);
    },
    [mutate],
  );

  const onChannelJoined = useCallback(
    (data: JoinnedChannelData) => {
      setRoom(data.user);
    },
    [setRoom],
  );

  useSocketListener(socket, NEW_MESSAGE, onNewMessage);
  useSocketListener(socket, JOINNED_PRIVATE_CHANNEL, onChannelJoined);

  return {
    ...users,
  };
};

export const useLatestMessages = (chatId: string) => {
  const { setLatestMessagesUrl } = useSocketChat();
  const url = setUrlWithParams(MESSAGES.LATEST_MESSAGES(chatId));
  const latestMessages = useFetch<LatestMessagesList>(url);

  useEffect(() => {
    setLatestMessagesUrl(url);
  }, [setLatestMessagesUrl, url]);

  return {
    ...latestMessages,
  };
};
