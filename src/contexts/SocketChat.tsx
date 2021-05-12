import { createContext, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SOCKET_URL } from 'constants/utils';
import { SOCKET } from 'constants/endpoints';
import io from 'socket.io-client';
import { getUserIdOnSession } from 'utils';
import { UserChat } from 'interfaces/chat';
import { UseMutateFunction } from 'react-query';

const {
  SENDED_MESSAGE,
  JOIN_PRIVATE_CHANNEL,
} = SOCKET;

type MessageData = {
  chatId: string;
  text: string;
  userReceivingId: string;
}

type LatestMessage = {
  [key: string]: string;
}

type SocketChatContextData = {
  socket: SocketIOClient.Socket;
  handleSendMessage: (
    value: MessageData,
    mutate: UseMutateFunction<unknown, unknown, unknown, void>,
    mutateOnChat: UseMutateFunction<unknown, unknown, unknown, void>,
  ) => void;
  handlePrivateJoinChannel: (userId: string) => void;
  room: UserChat;
  setRoom: (value: UserChat) => void;
  latestMessagesUrl: LatestMessage;
  setLatestMessagesUrl: (value: SetStateAction<LatestMessage>) => void;
  latestUserChatsURL: string;
  setLatestUserChatsURL: (value: string) => void;
  chatId: string;
  setChatId: (value: string) => void;
}

const defaultContextValues: SocketChatContextData = {
  socket: io(SOCKET_URL, { autoConnect: false }),
  handleSendMessage: () => undefined,
  handlePrivateJoinChannel: () => undefined,
  room: {} as UserChat,
  setRoom: () => undefined,
  latestMessagesUrl: {
    id: '',
  },
  setLatestMessagesUrl: () => undefined,
  latestUserChatsURL: '',
  setLatestUserChatsURL: () => undefined,
  chatId: '',
  setChatId: () => undefined,
};

const SocketChatContext = createContext(defaultContextValues);

export const SocketChatProvider = ({ children }: { children: React.ReactNode}) => {
  const [socket, setSocket] = useState(defaultContextValues.socket);
  const [room, setRoom] = useState(defaultContextValues.room);
  const [chatId, setChatId] = useState(defaultContextValues.chatId);
  const [latestMessagesUrl, setLatestMessagesUrl] = useState(
    defaultContextValues.latestMessagesUrl,
  );
  const [latestUserChatsURL, setLatestUserChatsURL] = useState(
    defaultContextValues.latestUserChatsURL,
  );

  useEffect(() => {
    setSocket(io.connect(SOCKET_URL, {
      query: {
        userLoggedId: getUserIdOnSession(),
      },
      transports: ['websocket'],
      forceNew: true,
    }));
  }, []);

  const handleSendMessage = useCallback((
    message: MessageData,
    mutate: UseMutateFunction<unknown, unknown, unknown, void>,
    mutateOnChat: UseMutateFunction<unknown, unknown, unknown, void>,
  ) => {
    const messagePayloadWithTime = {
      ...message,
      id: room.id,
      messageId: `${message.text}-${new Date().toISOString()}`,
      createdAt: new Date(),
      isReceived: false,
    };
    mutate(messagePayloadWithTime);
    mutateOnChat(messagePayloadWithTime);
    socket.emit(SENDED_MESSAGE, message);
  }, [socket, room.id]);

  const handlePrivateJoinChannel = useCallback((userId: string) => {
    socket.emit(JOIN_PRIVATE_CHANNEL, userId);
    setChatId(userId);
  }, [socket]);

  const contextValue = useMemo(() => ({
    handleSendMessage,
    socket,
    handlePrivateJoinChannel,
    room,
    setRoom,
    latestMessagesUrl,
    setLatestMessagesUrl,
    latestUserChatsURL,
    setLatestUserChatsURL,
    chatId,
    setChatId,
  }), [
    handleSendMessage,
    socket,
    handlePrivateJoinChannel,
    room,
    setRoom,
    latestMessagesUrl,
    setLatestMessagesUrl,
    latestUserChatsURL,
    setLatestUserChatsURL,
    chatId,
    setChatId,
  ]);

  return (
    <SocketChatContext.Provider value={contextValue}>
      {children}
    </SocketChatContext.Provider>
  );
};

export const useSocketChat = () => useContext(SocketChatContext);
