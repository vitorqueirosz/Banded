import { Relations } from 'components/structure';
import NavBar from 'components/structure/NavBar';
import { ENDPOINTS } from 'constants/endpoints';
import { useFetch } from 'hooks/useFetch';
import { Outlet } from 'react-router-dom';
import * as S from './Private.styles';

export const PrivateRoutes = () => {
  const { data } = useFetch(ENDPOINTS.users);

  return (
    <S.Wrapper>
      <NavBar user={data?.user} />

      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>

      <Relations />
    </S.Wrapper>
  );
};
