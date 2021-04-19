import { useRef, useState } from 'react';
import { useUserBands } from 'useCases/profile';
import { UserMusicalData } from '../UserMusicalData';

import * as S from './UserMusicalList.styles';

const userMusicalKeys: UserMusicalKeys[] = ['Bandas', 'Albums', 'Musicas'];

type UserMusicalKeys = 'Bandas'| 'Albums' | 'Musicas';

export const UserMusicalList = () => {
  const bandsRef = useRef<HTMLDivElement>(null);
  const musicsRef = useRef<HTMLDivElement>(null);
  const albumsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<UserMusicalKeys>('Bandas');

  const { data: { userBands } = {} } = useUserBands();
  // const { data: { userBands } = {} } = useUserMusics();
  // const { data: {} = {} } = useUserAlbums();

  return (
    <S.Container>
      {userMusicalKeys.map((key) => (
        <S.Tab onClick={() => setActiveTab(key)} active={activeTab === key}>
          {key}
        </S.Tab>
      ))}

      <UserMusicalData
        show={activeTab === 'Bandas'}
        items={userBands as [] ?? []}
        ref={bandsRef}
      />

      <UserMusicalData
        show={activeTab === 'Albums'}
        items={userBands as [] ?? []}
        ref={musicsRef}
      />

      <UserMusicalData
        show={activeTab === 'Musicas'}
        items={userBands as [] ?? []}
        ref={albumsRef}
      />

    </S.Container>

  );
};
