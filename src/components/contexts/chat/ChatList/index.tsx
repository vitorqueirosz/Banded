import { TextField } from 'components/form';
import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { JoinnedChannelData, UserChat } from 'interfaces';
import { useForm } from 'react-hook-form';
import { FiChevronLeft, FiSend } from 'react-icons/fi';
import * as S from './ChatList.styles';

type ChatListProps = {
  chats: UserChat[];
}

type MessageData = {
  message: string;
}

export const ChatList = ({ chats }: ChatListProps) => {
  const { register, handleSubmit } = useForm();
  const { handleSendMessage, handlePrivateJoinChannel, room, setRoom } = useSocketChat();

  const onSubmit = ({ message }: MessageData) => {
    const messagePayload = {
      chatId: room.user.id,
      text: message,
    };
    handleSendMessage(messagePayload);
  };

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

      <S.ChatRoom show={!!room.user?.id}>
        <>
          <S.Header>
            <FiChevronLeft
              color="#fff"
              size={22}
              onClick={() => setRoom({} as JoinnedChannelData)}
            />
            <UserChip
              name={room.user?.name}
              avatar={room.user?.avatar}
              onClick={() => handlePrivateJoinChannel(room.user?.id)}
              size="small"
            />
          </S.Header>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="message"
              register={register}
              placeholder="Digite uma mensagem"
              inputSize="xsmall"
              color="secondary"
              autoComplete="off"
            />
            <S.SendMessageButton type="submit">
              <FiSend color="#fff" size={20} />
            </S.SendMessageButton>
          </S.Form>
        </>
      </S.ChatRoom>
    </S.Container>
  );
};
