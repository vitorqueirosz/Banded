import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsm};
    height: 100%;
  `}
`;
