import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SOCKET_URL } from 'constants/utils';
import { SOCKET } from 'constants/endpoints';
import io from 'socket.io-client';
import { useSocketListener } from 'hooks/useSocketListener';
import { getUserIdOnSession } from 'utils';
import { JoinnedChannelData } from 'interfaces/chat';

const {
  SENDED_MESSAGE,
  NEW_MESSAGE,
  JOIN_PRIVATE_CHANNEL,
  JOINNED_PRIVATE_CHANNEL,
} = SOCKET;

type MessageData = {
  chatId: string;
  text: string;
}

type SocketChatContextData = {
  socket: SocketIOClient.Socket;
  handleSendMessage: (value: MessageData) => void;
  handlePrivateJoinChannel: (userId: string) => void;
  room: JoinnedChannelData;
}

const defaultContextValues: SocketChatContextData = {
  socket: io(SOCKET_URL, { autoConnect: false }),
  handleSendMessage: () => undefined,
  handlePrivateJoinChannel: () => undefined,
  room: {} as JoinnedChannelData,
};

const SocketChatContext = createContext(defaultContextValues);

export const SocketChatProvider = ({ children }: { children: React.ReactNode}) => {
  const [socket, setSocket] = useState(defaultContextValues.socket);
  const [room, setRoom] = useState({} as JoinnedChannelData);

  useEffect(() => {
    setSocket(io.connect(SOCKET_URL, {
      query: {
        userLoggedId: getUserIdOnSession(),
      },
      transports: ['websocket'],
      forceNew: true,
    }));
  }, []);

  const handleSendMessage = useCallback((message: MessageData) => {
    socket.emit(SENDED_MESSAGE, message);
  }, [socket]);

  const handlePrivateJoinChannel = useCallback((userId: string) => {
    socket.emit(JOIN_PRIVATE_CHANNEL, userId);
  }, [socket]);

  const onNewMessage = useCallback((data: string) => {
    // eslint-disable-next-line no-console
    console.log('message', data);
  }, []);

  const onChannelJoined = useCallback((data: JoinnedChannelData) => {
    setRoom(data);
  }, []);

  useSocketListener(socket, NEW_MESSAGE, onNewMessage);
  useSocketListener(socket, JOINNED_PRIVATE_CHANNEL, onChannelJoined);

  const contextValue = useMemo(() => ({
    handleSendMessage,
    socket,
    handlePrivateJoinChannel,
    room,
  }), [
    handleSendMessage,
    socket,
    handlePrivateJoinChannel,
    room,
  ]);

  return (
    <SocketChatContext.Provider value={contextValue}>
      {children}
    </SocketChatContext.Provider>
  );
};

export const useSocketChat = () => useContext(SocketChatContext);
