import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { NavBarProps } from '.';

const containerModifiers = {
  hasRelations: (theme: DefaultTheme) => css`
    width: calc(100vw - ${theme.elements.relations});
  `,
};

export const Container = styled.div<Pick<NavBarProps, 'hasRelations'>>`
  ${({ theme, hasRelations }) => css`
    grid-area: nav;
    height: ${theme.elements.nav};
    background: ${theme.colors.dark.element};
    padding: ${theme.spacings.xsm};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    transition: width 0.3s ease-in-out;

    > div {
      svg {
        cursor: pointer;
      }
    }

    ${media.lessThan('large')`
      justify-content: space-between;
    `}

    ${hasRelations && containerModifiers.hasRelations(theme)}
  `}
`;

const titleModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
};

export const Title = styled.span<{ active: boolean }>`
  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.light.lighter};
    font-weight: 500;
    margin-right: ${theme.spacings.md};

    ${active && titleModifiers.active(theme)}
  `}
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 18rem;
    background: ${theme.colors.dark.darker};
    border-radius: ${theme.border.radius};
    padding: 0.4rem ${theme.spacings['2xs']};

    ${media.lessThan('large')`
      max-width: 3.6rem;
      width: 100%;
      background: transparent;
      padding: 0;
    `}
  `}
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    margin-left: ${theme.spacings.xsm};
  `}
`;
