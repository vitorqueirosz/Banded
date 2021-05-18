import styled, { css } from 'styled-components';
import * as AddStyles from 'components/structure/Add/Add.styles';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.dark.darker};
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.base};
    margin-top: ${theme.spacings['2xs']};

    ${AddStyles.Container} {
      padding: ${theme.spacings.xsm};

      ${media.lessThan('large')`
        padding: ${theme.spacings['2xs']};
      `}
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: none;
    border: none;
    outline: none;
    color: ${theme.colors.light.lighter};
    border-top: 1px solid ${theme.colors.dark.light};
    padding: ${theme.spacings.xsm};
    &::placeholder {
      color: ${theme.colors.light.darkGray};
    }
  `}
`;

export const AddButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    border-top: 1px solid ${theme.colors.dark.light};
    color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsm};
    font-weight: 600;
  `}
`;
