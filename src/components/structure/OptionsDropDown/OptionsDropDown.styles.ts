import styled, { css } from 'styled-components';

export const Option = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsm};
    border-top: 1px solid ${theme.colors.dark.light};
    z-index: ${theme.layers.base};

    > span {
      color: ${theme.colors.light.lighter};
    }
  `}
`;
