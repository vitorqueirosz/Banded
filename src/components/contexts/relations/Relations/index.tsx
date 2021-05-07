import { ChatList } from 'components/contexts';
import { useState } from 'react';
import { FiArrowRightCircle, FiMessageCircle, FiMusic } from 'react-icons/fi';

import { RelationTabs } from 'constants/enums';

import { ChatRoomWrapper } from 'components/contexts/chat';
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
  const [selectedTab, setSelectedTab] = useState(RelationTabs.Chat);

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
        <S.DisplayContent show={selectedTab === RelationTabs.Chat}>
          <ChatList />
        </S.DisplayContent>

        <S.DisplayContent show={selectedTab === RelationTabs.Bands}>
          <ChatList />
        </S.DisplayContent>

        <ChatRoomWrapper />
      </S.Divisor>
    </S.Wrapper>
  );
};
