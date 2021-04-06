import styled, { css } from 'styled-components';
import { Wrapper } from 'components/form/TextField/TextField.styles';
import { WrapperList } from 'components/structure';

export const Container = styled.div`
 ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.md};
    overflow: hidden;

    ${Wrapper} {
      background: ${theme.colors.light.lighter};
    }

    ${WrapperList} {
      display: flex;
    }
  `}
`;

export const SearchContainer = styled.div`
  width: 400px;
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > svg {
      margin-left: ${theme.spacings['2xs']};
      cursor: pointer;
    }
  `}
`;

export const List = styled.div``;
