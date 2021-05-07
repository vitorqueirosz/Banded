import styled, { css } from 'styled-components';
import * as TextField from 'components/form/TextField/TextField.styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding-top: 16px;
    padding: ${theme.spacings.xsm};
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;

  ${TextField.Wrapper} {
    margin-bottom: 0;
  }

  ${TextField.Input} {
    border-radius: 3rem;
  }
`;

export const Messages = styled.div`
  ${({ theme }) => css`
    display: flex;
    overflow-y: auto;
    gap: ${theme.spacings['2xs']};
    flex-direction: column;
    margin-top: auto;
    padding: ${theme.spacings['2xs']};
  `}
`;

export const SendMessageButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border: none;
    padding: ${theme.spacings['2xs']};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${theme.spacings['2xs']};
  `}
`;
