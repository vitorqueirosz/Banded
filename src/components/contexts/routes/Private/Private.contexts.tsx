import { SocketChatProvider } from 'contexts';

export const PrivateContexts = ({ children }: { children: React.ReactNode}) => (
  <SocketChatProvider>
    {children}
  </SocketChatProvider>
);
