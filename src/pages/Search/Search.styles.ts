import styled, { css } from 'styled-components';
import { Wrapper } from 'components/form/TextField/TextField.styles';
import { WrapperList, WrapperToOutlet } from 'components/structure';

export const Container = styled(WrapperToOutlet)`
 ${({ theme }) => css`

    ${Wrapper} {
      background: ${theme.colors.light.lighter};
    }

    ${WrapperList} {
      display: flex;
    }
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    width: 400px;
    margin-bottom: ${theme.spacings.md};
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      margin-left: ${theme.spacings['2xs']};
      cursor: pointer;
    }
  `}
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
`;

export const Display = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.dark.darker};
    border-radius: ${theme.border.radius};
    padding: 0.2rem;
    padding-left: 0.4rem;
    width: 8.5rem;
    margin-right: ${theme.spacings.xsm};
    cursor: pointer;

    > span {
      color: ${theme.colors.light.lighter};
      font-size: ${theme.font.sizes.xsm};
      font-weight: 500;
    }
  `}
`;

export const CleanButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.light.lighter};
    align-self: flex-end;
    cursor: pointer;
    outline: none;
  `}
`;

export const List = styled.div``;
