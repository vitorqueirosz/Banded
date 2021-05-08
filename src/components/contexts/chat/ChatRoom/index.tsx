import { TextField } from 'components/form';
import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { useMutateByUrl, useMutateLatestMessage } from 'hooks';
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

type ChatRoomProps = {
  handleChatVisibility: () => void;
}

export const ChatRoom = ({ handleChatVisibility }: ChatRoomProps) => {
  const { register, handleSubmit, setValue } = useForm();
  const { room, handleSendMessage, latestMessagesUrl, latestUserChatsURL } = useSocketChat();
  const { data } = useLatestMessages(room.id);
  const latestMessagesKey = 'latestMessages';
  const latestMessagesMutate = useMutateByUrl(
    latestMessagesUrl,
    () => undefined,
    latestMessagesKey,
  );
  const latestMessageMutate = useMutateLatestMessage(
    latestUserChatsURL,
    () => undefined,
  );

  const messages = useMemo(() => {
    const messages = data?.latestMessages.map(message => ({
      ...message,
      isReceived: message.user !== getUserIdOnSession(),
    }));

    return messages;
  }, [data?.latestMessages]);

  const onSubmit = ({ message }: MessageData) => {
    const messagePayload = {
      chatId: room.chatId,
      userReceivingId: room.id,
      text: message,
    };
    handleSendMessage(
      messagePayload,
      latestMessagesMutate,
      latestMessageMutate,
    );
    setValue('message', '');
  };

  return (
    <S.Container>
      <>
        <S.Header>
          <FiChevronLeft
            color="#fff"
            size={22}
            onClick={handleChatVisibility}
          />
          <UserChip
            name={room?.name}
            avatar={room?.avatar}
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
