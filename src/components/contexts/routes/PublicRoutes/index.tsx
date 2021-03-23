import { Outlet } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import * as S from './PublicRoutes.styles';

export const PublicRoutes = () => (
  <S.Wrapper>
    <S.BackgroundImage />

    <S.OutletWrapper>
      <S.Logo src={logoImg} alt="logo-banded" />
      <Outlet />
    </S.OutletWrapper>
  </S.Wrapper>
);
