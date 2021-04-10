import { UserFetchProps } from 'components/contexts';
import { Avatar } from 'components/structure';
import { USERS } from 'constants/endpoints';
import { useFetch } from 'hooks/useFetch';

import * as S from './Profile.styles';

export const Profile = () => {
  const { data: { user } = {} } = useFetch<UserFetchProps>(USERS.BASE);

  return (
    <S.Container>

      <S.UserContainer>
        <S.UserChip>
          <Avatar
            src={user?.avatar}
            instrument={user?.instrument}
            hasBackground={!user?.avatar}
          />
          <h3>{user?.name}</h3>
          <span>{user?.instrument}</span>
        </S.UserChip>

        <S.MusicalInfos />
      </S.UserContainer>

    </S.Container>
  );
};
