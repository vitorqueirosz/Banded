import { TextField } from 'components/form';
import { UserChip } from 'components/structure';
import { useSocketChat } from 'contexts';
import { useDebounce } from 'hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useChats } from 'useCases';

export const ChatList = () => {
  const [name, setName] = useState('');
  const { data = [] } = useChats({ name });
  const { handlePrivateJoinChannel } = useSocketChat();
  const { register } = useForm();

  const handleSearchByName = useDebounce((value: string) => setName(value), 350);

  return (
    <>
      <TextField
        name="uuid"
        register={register}
        color="secondary"
        label="Pesquise um usuario"
        placeholder="Pesquise um usuario"
        isSearch
        inputSize="small"
        onChange={({ target: { value } }) => handleSearchByName(value)}
        autoComplete="off"
      />

      {data.map(({ id, name, avatar, lastMessage }) => (
        <UserChip
          key={id}
          name={name}
          avatar={avatar}
          onClick={() => handlePrivateJoinChannel(id)}
          size="normal"
          hasBorder
          lastMessage={lastMessage}
        />
      ))}
    </>
  );
};
