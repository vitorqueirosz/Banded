import styled, { css } from 'styled-components';
import * as TextField from 'components/form/TextField/TextField.styles';

const chatRoomModifiers = {
  show: () => css`
    transform: translateX(0);
  `,
};

export const Container = styled.div<{ show: boolean }>`
  ${({ theme, show }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    background: ${theme.colors.dark.element};
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding-top: 16px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    padding: ${theme.spacings.xsm};

    ${show && chatRoomModifiers.show()}
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
