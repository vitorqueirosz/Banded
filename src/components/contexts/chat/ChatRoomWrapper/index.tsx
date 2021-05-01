import { useSocketChat } from 'contexts';
import { ChatRoom } from '../ChatRoom';

export const ChatRoomWrapper = () => {
  const { room } = useSocketChat();

  return (
    <>
      {room.user?.id && (
        <ChatRoom />
      )}
    </>
  );
};
