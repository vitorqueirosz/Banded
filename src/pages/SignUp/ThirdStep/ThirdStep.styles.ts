import styled, { css } from 'styled-components';
import { FormContainer, Scroll } from 'components/structure';
import media from 'styled-media-query';
import { appearFromBottom } from '../animations';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormContainer)`
  ${({ theme }) => css`
    align-items: flex-start;
    animation: ${appearFromBottom} 0.6s ease-in-out;
    margin: ${theme.spacings.xsm};

    ${media.greaterThan('large')`
      overflow: auto;
      max-height: 80vh;

      ${Scroll} {
        &::-webkit-scrollbar {
          width: 4px;
        }
      }
    `}
  `}
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    text-align: center;
    margin-top: ${theme.spacings['2xs']};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    font-family: ${theme.font.family};
    line-height: ${theme.font.lineHeight.md};
    font-size: ${theme.font.sizes.lg};
  `}
`;

export const HasAccount = styled.div`
  ${({ theme }) => css`
    > a {
      display: flex;
      align-items: center;
      color: ${theme.colors.light.lighter};
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;

      > svg {
        margin-right: ${theme.spacings['2xs']};
      }
    }
  `}
`;
