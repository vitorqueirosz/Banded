import { useSocketChat } from 'contexts';
import { UserChat } from 'interfaces';
import { useState } from 'react';
import { ChatRoom } from '../ChatRoom';

import * as S from './ChatRoom.styles';

export const ChatRoomWrapper = () => {
  const { room, setRoom } = useSocketChat();
  const [isHide, setIsHide] = useState(false);

  const handleChatVisibility = () => {
    setIsHide(true);
    setTimeout(() => {
      setRoom({} as UserChat);
      setIsHide(false);
    }, 200);
  };

  return (
    <S.Wrapper hide={isHide} show={!!room?.id}>
      {room?.id && (
        <ChatRoom
          handleChatVisibility={handleChatVisibility}
        />
      )}
    </S.Wrapper>
  );
};
