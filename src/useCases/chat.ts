import { USERS, MESSAGES, SOCKET } from 'constants/endpoints';
import { useSocketChat } from 'contexts';
import { useMutateByUrl, useMutateUsersChat, useSocketListener } from 'hooks';
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

type ChatProps = {
  chats: UserChatMessage[];
};

type Params = {
  name: string;
};

export const useChats = (params: Params) => {
  const {
    socket,
    setRoom,
    latestMessagesUrl,
    latestUserChatsURL,
    setLatestUserChatsURL,
    chatId,
  } = useSocketChat();

  const url = setUrlWithParams(USERS.USER_CHATS, params);
  const users = useFetch<ChatProps>(
    url,
    {},
    {
      refetchOnWindowFocus: true,
    },
  );

  const latestMessagesKey = 'latestMessages';
  const latestMessagesMutate = useMutateByUrl(
    latestMessagesUrl[chatId],
    () => undefined,
    latestMessagesKey,
  );

  const userChatsMutate = useMutateUsersChat(
    latestUserChatsURL,
    () => undefined,
  );

  useEffect(() => {
    setLatestUserChatsURL(url);
  }, [setLatestUserChatsURL, url]);

  const onNewMessage = useCallback(
    (data: Message) => {
      latestMessagesMutate(data);
      userChatsMutate(data);
    },
    [latestMessagesMutate, userChatsMutate],
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
    setLatestMessagesUrl(prevState => ({ ...prevState, [chatId]: url }));
  }, [setLatestMessagesUrl, chatId, url]);

  return {
    ...latestMessages,
  };
};
