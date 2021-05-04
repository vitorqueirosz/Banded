import { TextField } from 'components/form';
import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { JoinnedChannelData } from 'interfaces';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FiChevronLeft, FiSend } from 'react-icons/fi';
import { useLatestMessages } from 'useCases';
import { getUserIdOnSession } from 'utils';
import { Message } from '../Message';
import * as S from './ChatRoom.styles';

type MessageData = {
  message: string;
}

export const ChatRoom = () => {
  const { register, handleSubmit } = useForm();
  const { room, setRoom, handleSendMessage } = useSocketChat();
  const { data } = useLatestMessages(room.user.id);

  const messages = useMemo(() => {
    const messages = data?.latestMessages.map(message => ({
      ...message,
      isReceived: message.user !== getUserIdOnSession(),
    }));

    return messages;
  }, [data?.latestMessages]);

  const onSubmit = ({ message }: MessageData) => {
    const messagePayload = {
      chatId: room.user.id,
      text: message,
    };
    handleSendMessage(messagePayload);
  };

  return (
    <S.Container show={!!room.user?.id}>
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
            size="small"
          />
        </S.Header>

        <S.Messages>
          {messages?.map(({ id, isReceived, text, createdAt }) => (
            <Message
              key={id}
              isReceived={isReceived}
              message={text}
              time={new Date(createdAt)}
            />
          ))}
        </S.Messages>

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
    </S.Container>
  );
};
