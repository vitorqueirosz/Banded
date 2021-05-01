import { TextField } from 'components/form';
import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { JoinnedChannelData } from 'interfaces';
import { useForm } from 'react-hook-form';
import { FiChevronLeft, FiSend } from 'react-icons/fi';
// import { useLatestMessages } from 'useCases';
import * as S from './ChatRoom.styles';

type MessageData = {
  message: string;
}

export const ChatRoom = () => {
  const { register, handleSubmit } = useForm();
  const { room, setRoom, handleSendMessage } = useSocketChat();

  // const { data } = useLatestMessages(room.user.id);

  // eslint-disable-next-line no-console

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
