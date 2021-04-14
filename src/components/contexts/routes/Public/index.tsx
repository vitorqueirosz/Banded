import { Outlet } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import * as S from './Public.styles';
import { PublicContexts } from './Public.contexts';

export const PublicRoutes = () => (
  <PublicContexts>
    <S.Wrapper>
      <S.BackgroundImage />
      <S.OutletWrapper>
        <S.Logo src={logoImg} alt="logo-banded" loading="lazy" />
        <Outlet />
      </S.OutletWrapper>
    </S.Wrapper>
  </PublicContexts>
);
