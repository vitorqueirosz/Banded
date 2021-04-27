import { useState } from 'react';
import { useUserAlbums, useUserBands, useUserMusics } from 'useCases/profile';
import { UserMusicalKeys } from 'constants/enums';
import { UserMusicalData } from '../UserMusicalData';

import * as S from './UserMusicalList.styles';

const userMusicalKeys = ['Albums', 'Bands', 'Musics'] as UserMusicalKeys[];

export const UserMusicalList = () => {
  const [activeTab, setActiveTab] = useState(UserMusicalKeys.Albums);

  const { useFetchUserBands } = useUserBands();
  const { data: { userBands } = {},
    hasMoreBands,
    isFetchingBands,
    loadMoreBands,
  } = useFetchUserBands();

  const { useFetchUserMusics } = useUserMusics();
  const {
    data: { userMusics } = {},
    loadMoreMusics,
    hasMoreMusics,
    isFetchingMusics,
  } = useFetchUserMusics();

  const { useFetchUserAlbums } = useUserAlbums();
  const {
    data: { userAlbums } = {},
    loadMoreAlbums,
    hasMoreAlbums,
    isFetchingAlbums,
  } = useFetchUserAlbums();

  return (
    <S.Container>
      <S.TabsWrapper>
        {userMusicalKeys.map((key) => (
          <S.Tab
            key={key}
            onClick={() => setActiveTab(key)}
            active={activeTab === key}
          >
            {key}
          </S.Tab>
        ))}
      </S.TabsWrapper>

      <UserMusicalData
        show={activeTab === UserMusicalKeys.Bands}
        items={userBands as [] ?? []}
        callback={loadMoreBands}
        hasMore={hasMoreBands}
        isFetching={isFetchingBands}
      />

      <UserMusicalData
        show={activeTab === UserMusicalKeys.Albums}
        items={userAlbums as [] ?? []}
        callback={loadMoreAlbums}
        hasMore={hasMoreAlbums}
        isFetching={isFetchingAlbums}
      />

      <UserMusicalData
        show={activeTab === UserMusicalKeys.Musics}
        items={userMusics as [] ?? []}
        callback={loadMoreMusics}
        hasMore={hasMoreMusics}
        isFetching={isFetchingMusics}
      />

    </S.Container>

  );
};
