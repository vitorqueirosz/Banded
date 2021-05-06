import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { UserChat } from 'interfaces';

import * as S from './ChatList.styles';

type ChatListProps = {
  chats: Omit<UserChat, 'chatId'>[];
}

export const ChatList = ({ chats }: ChatListProps) => {
  const { handlePrivateJoinChannel } = useSocketChat();

  return (
    <S.Container>
      {chats.map(({ id, name, avatar }) => (
        <UserChip
          key={id}
          name={name}
          avatar={avatar}
          onClick={() => handlePrivateJoinChannel(id)}
          size="medium"
          hasBorder
        />
      ))}
    </S.Container>
  );
};
