import { Relations } from 'components/structure';
import NavBar from 'components/structure/NavBar';
import { USERS } from 'constants/endpoints';
import { User } from 'contexts';
import { useSettings } from 'contexts/Settings';
import { useFetch } from 'hooks/useFetch';
import { Outlet } from 'react-router-dom';
import * as S from './Private.styles';

export type UserFetchProps = {
  user: User
}

export const PrivateRoutes = () => {
  const { data } = useFetch<UserFetchProps>(USERS.BASE);
  const { hasRelations, setHasRelations } = useSettings();

  return (
    <S.Wrapper hasRelations={hasRelations}>
      <NavBar user={data?.user} />

      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>

      <Relations
        hasRelations={hasRelations}
        handleRelations={() => setHasRelations(prevState => !prevState)}
      />
    </S.Wrapper>
  );
};
