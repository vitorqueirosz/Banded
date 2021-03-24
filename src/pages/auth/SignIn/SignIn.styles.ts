import styled, { css } from 'styled-components';
import { FormContainer } from 'components/form/Form';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormContainer)``;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    text-align: center;
    margin-top: ${theme.spacings['2xs']};
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    > a {
      display: flex;
      align-items: center;
      color: ${theme.colors.neutral.light};
      cursor: pointer;
      text-decoration: none;

      > svg {
        margin-right: ${theme.spacings['2xs']};
      }
    }
  `}
`;
