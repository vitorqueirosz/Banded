import styled, { css } from 'styled-components';
import { FormContainer } from 'components/form/Form';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormContainer)`
  align-items: flex-start;
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
    font-weight: 500;
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
