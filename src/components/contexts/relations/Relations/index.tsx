import { TextField } from 'components/form';
import { Avatar } from 'components/structure';
import { useSocketChat } from 'contexts';
import { useDebounce } from 'hooks/useDebounce';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowRightCircle, FiMessageCircle, FiSend } from 'react-icons/fi';
import { useChats } from 'useCases';
import * as S from './Relations.styles';

export type RelationsProps = {
  handleRelations: () => void;
  hasRelations: boolean;
}

const relationTabs = [
  {
    name: 'Chat',
    icon: <FiMessageCircle color="#fff" size={22} />,
  },
];

type MessageData = {
  message: string;
}

export const Relations = ({ hasRelations, handleRelations }: RelationsProps) => {
  const [name, setName] = useState('');
  const { register, handleSubmit } = useForm();
  const { data = [] } = useChats({ name });
  const { handleSendMessage, handlePrivateJoinChannel, room } = useSocketChat();

  const handleSearchByName = useDebounce((value: string) => setName(value), 350);

  const onSubmit = ({ message }: MessageData) => {
    const messagePayload = {
      chatId: room.user.id,
      text: message,
    };
    handleSendMessage(messagePayload);
  };

  return (
    <S.Wrapper hasRelations={hasRelations}>
      <S.Switch onClick={handleRelations}>
        <FiArrowRightCircle color="#fff" size={22} />
      </S.Switch>

      <S.Tabs>
        {relationTabs.map(tab => (
          <S.Tab key={tab.name}>
            {tab.icon}
            <span>{tab.name}</span>
          </S.Tab>
        ))}
      </S.Tabs>

      <TextField
        name="uuid"
        register={register}
        color="secondary"
        label="Pesquise um usuario"
        placeholder="Pesquise um usuario"
        isSearch
        inputSize="small"
        onChange={({ target: { value } }) => handleSearchByName(value)}
      />

      <S.ChatList>
        {data.map(user => (
          <S.UserChip key={user.id} onClick={() => handlePrivateJoinChannel(user.id)}>
            <Avatar src={user.avatar} hasBackground />
            <span>{user.name}</span>
          </S.UserChip>
        ))}
      </S.ChatList>

      <S.ChatRoom show={!!room.user?.id}>
        <>
          <S.UserChip>
            <Avatar src={room.user?.avatar} hasBackground />
            <span>{room.user?.name}</span>
          </S.UserChip>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="message"
              register={register}
              label="Digite uma mensagem"
              placeholder="Digite uma mensagem"
              isSearch
              inputSize="small"
            />
            <button type="submit">
              <FiSend color="#fff" size={22} />
            </button>
          </form>
        </>
      </S.ChatRoom>
    </S.Wrapper>
  );
};
