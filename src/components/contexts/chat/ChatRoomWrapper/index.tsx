import { useSocketChat } from 'contexts';
import { ChatRoom } from '../ChatRoom';

export const ChatRoomWrapper = () => {
  const { room } = useSocketChat();

  return (
    <>
      {room?.id && (
        <ChatRoom />
      )}
    </>
  );
};
