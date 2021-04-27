import styled, { css, DefaultTheme } from 'styled-components';
import { RelationsProps } from 'components/contexts';
import media from 'styled-media-query';

type WrapperProps = Pick<RelationsProps, 'hasRelations'>;

const wrapperModifiers = {
  hide: (theme: DefaultTheme) => css`
    transform: translateX(${theme.elements.relations});

    ${Switch} {
      svg {
        transform: rotate(180deg);
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasRelations }) => css`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    height: 100%;
    width: ${theme.elements.relations};
    background: ${theme.colors.dark.element};
    transition: transform 0.3s ease-in-out;
    padding: ${theme.spacings.xsm};

    ${media.lessThan('large')`
      bottom: 0;
      left: 0;
      transform: translateY(90%);
      width: 100vw;
    `}

    ${!hasRelations && wrapperModifiers.hide(theme)}
  `}
`;

export const Switch = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark.darker};
    width: 30px;
    height: 30px;
    position: absolute;
    left: -30px;
    top: 10rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    padding: calc(${theme.spacings['2xs']} / 2);
  `}
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Tab = styled.div`
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    color: #fff;
    margin-top: 16px;
  }
`;

export const ChatList = styled.div`
  height: auto;
  width: 100%;
`;

export const UserChip = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;

  > span {
    color: #fff;
    margin-left: 16px;
  }

  &:hover {
    filter: brightness(3);
  }
`;

const chatRoomModifiers = {
  show: () => css`
    opacity: 1;
    visibility: visible;
  `,
};

export const ChatRoom = styled.div<{ show: boolean }>`
  ${({ show }) => css`
    z-index: 50;
    position: absolute;
    background: #0c1015;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 16px;
    opacity: 0;
    visibility: hidden;

    > form {
      display: flex;
      align-items: center;
    }

    button {
      border: none;
      background: none;
      padding: 8px;
    }

    ${show && chatRoomModifiers.show()}
  `}
`;
