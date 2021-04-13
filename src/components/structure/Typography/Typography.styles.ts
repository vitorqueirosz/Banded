import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    margin-bottom: ${theme.spacings.xsm};
  `}
`;