import styled, { css } from 'styled-components';
import * as AddStyles from 'components/structure/Add/Add.styles';
import * as TextField from 'components/form/TextField/TextField.styles';
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

    ${TextField.Input} {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid ${theme.colors.dark.light};
      border-top: 1px solid ${theme.colors.dark.light};
      position: relative;

      &:active,
      &:focus {
        border-bottom-color: ${theme.colors.secondary};
        transition: all 0.3s ease-in-out;
      }
    }
  `}
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
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
