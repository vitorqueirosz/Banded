import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      color: ${theme.colors.light.lighter};
      margin-left: ${theme.spacings['2xs']};
    }
  `}

`;
