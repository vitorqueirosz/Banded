import { UserFetchProps } from 'components/contexts';
import { UserMusicalList } from 'components/contexts/user';
import { Avatar } from 'components/structure';
import { USERS } from 'constants/endpoints';
import { useFetch } from 'hooks/useFetch';
import { useMemo } from 'react';

import * as S from './Profile.styles';

export const Profile = () => {
  const { data: { user } = {} } = useFetch<UserFetchProps>(USERS.BASE);

  const musicInfos = useMemo(() => {
    const userMusician = {
      Albums: user?.albums,
      Músicas: user?.musics,
      Bandas: user?.bands,
    };
    return userMusician;
  }, [user?.albums, user?.bands, user?.musics]);

  const getUserFirstName = (name: string) => name.trim().split(' ')[0];

  return (
    <S.Container>
      <S.UserContainer>
        <S.UserChip>
          <Avatar
            src={user?.avatar}
            instrument={user?.instrument}
            hasBackground={!user?.avatar}
          />
          <h3>{getUserFirstName(user?.name ?? '')}</h3>
          <span>{user?.instrument}</span>
        </S.UserChip>
        <S.MusicalInfos>
          {Object.entries(musicInfos).map(([key, value]) => (
            <S.MusicInfo key={key}>
              <S.MusicKey>{key}</S.MusicKey>
              <S.MusicValue>{value}</S.MusicValue>
            </S.MusicInfo>
          ))}
        </S.MusicalInfos>
      </S.UserContainer>

      <UserMusicalList />
    </S.Container>
  );
};
