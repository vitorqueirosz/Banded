import { ChatList } from 'components/contexts';
import { TextField } from 'components/form';
import { useDebounce } from 'hooks/useDebounce';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowRightCircle, FiMessageCircle, FiMusic } from 'react-icons/fi';
import { useChats } from 'useCases';

import { RelationTabs } from 'constants/enums';

import * as S from './Relations.styles';

export type RelationsProps = {
  handleRelations: () => void;
  hasRelations: boolean;
}

const relationTabs = [
  {
    name: RelationTabs.Chat,
    icon: <FiMessageCircle color="#b6b6b6" size={22} />,
  },
  {
    name: RelationTabs.Bands,
    icon: <FiMusic color="#b6b6b6" size={22} />,
  },
];

export const Relations = ({ hasRelations, handleRelations }: RelationsProps) => {
  const [name, setName] = useState('');
  const { register } = useForm();
  const { data = [] } = useChats({ name });
  const [selectedTab, setSelectedTab] = useState(RelationTabs.Chat);

  const handleSearchByName = useDebounce((value: string) => setName(value), 350);

  return (
    <S.Wrapper hasRelations={hasRelations}>
      <S.Switch onClick={handleRelations}>
        <FiArrowRightCircle color="#fff" size={22} />
      </S.Switch>

      <S.Tabs>
        {relationTabs.map(tab => (
          <S.Tab
            key={tab.name}
            active={selectedTab === tab.name}
            onClick={() => setSelectedTab(tab.name)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </S.Tab>
        ))}
      </S.Tabs>

      <S.Divisor>
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

        <ChatList chats={data} />
      </S.Divisor>
    </S.Wrapper>
  );
};
