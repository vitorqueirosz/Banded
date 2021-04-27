/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

export const useSocketListener = (
  socket: SocketIOClient.Socket,
  path: string,
  callback: any,
) => {
  useEffect(() => {
    socket.on(path, callback);

    return () => {
      socket.off(path, callback);
    };
  }, [socket, path, callback]);
};
