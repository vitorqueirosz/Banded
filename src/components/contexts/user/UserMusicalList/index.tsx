import { useState } from 'react';
import { useUserAlbums, useUserBands, useUserMusics } from 'useCases/profile';
import { UserMusicalKeys } from 'constants/enums';
import { Add, Modal } from 'components/structure';
import { MembersProvider } from 'contexts';
import { UserMusicalData } from '../UserMusicalData';

import * as S from './UserMusicalList.styles';
import { ModalBand } from '../ModalBand';

const userMusicalKeys = ['Albums', 'Bands', 'Musics'] as UserMusicalKeys[];

const lowerMusicalKeys = {
  Albums: 'álbum',
  Bands: 'banda',
  Musics: 'música',
};

export const UserMusicalList = () => {
  const [activeTab, setActiveTab] = useState(UserMusicalKeys.Albums);
  const [showModal, setShowModal] = useState(false);

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

  const handleToggleModal = () => setShowModal(prevState => !prevState);

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

      <Add
        align="end"
        title={`Adicionar ${lowerMusicalKeys[activeTab]}`}
        handleAdd={handleToggleModal}
      />

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
      {showModal && (
        <Modal
          handleCloseModal={handleToggleModal}
          width="60%"
          height="600px"
          show={showModal}
        >
          <MembersProvider>
            <ModalBand handleCloseModal={handleToggleModal} />
          </MembersProvider>
        </Modal>
      )}
    </S.Container>

  );
};
