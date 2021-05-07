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
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${theme.spacings.xsm};
    padding-bottom: ${theme.spacings.xsm};
  `}
`;

const tabModifiers = {
  active: (theme: DefaultTheme) => css`
    &:after {
      background: ${theme.colors.primary};
      transform: translateX(50%);
    }
  `,
};

export const Tab = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;

    > span {
      color: ${theme.colors.light.lighter};
      margin: ${theme.spacings.xsm} 0 0.4rem;
    }

    &:after {
      content: '';
      width: 100%;
      height: 0.3rem;
      background: transparent;
      position: absolute;
      bottom: -${theme.spacings['2xs']};
      right: 50%;
      transform: translateX(0%);
      transition: all 0.3s ease-in-out;

      ${media.lessThan('medium')`
        width: 2rem;
      `}
    }

    &:last-child {
      border-right: none;
    }

    ${active && tabModifiers.active(theme)}
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.xsm};
  `}
`;

export const DisplayContent = styled.div<{ show: boolean }>`
  ${({ show }) => css`
    display: ${show ? 'block' : 'none'};
    position: relative;
    width: 100%;
    height: 100%;
  `}
`;
