import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  show: boolean;
  hide: boolean;
};

const chatRoomModifiers = {
  show: (theme: DefaultTheme) => css`
    transform: translateX(0);
    position: absolute;
    background: ${theme.colors.dark.element};
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  `,
  hide: () => css`
    transform: translateX(100%);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, show, hide }) => css`
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    ${show && chatRoomModifiers.show(theme)}
    ${hide && chatRoomModifiers.hide()}
  `}
`;
