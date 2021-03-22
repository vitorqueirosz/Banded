import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './Public.styles';

export const PublicRoutes = () => (
  <S.Wrapper>
    <Outlet />
  </S.Wrapper>
);
