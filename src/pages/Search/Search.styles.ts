import styled, { css } from 'styled-components';
import { Wrapper } from 'components/form/TextField/TextField.styles';

export const Container = styled.div`
 ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.md};
    overflow: hidden;

    ${Wrapper} {
      background: ${theme.colors.light.lighter};
    }
  `}
`;
