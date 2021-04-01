import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: nav;
    height: ${theme.elements.nav};
    background: ${theme.colors.dark.element};
    padding: ${theme.spacings.xsm};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${media.lessThan('large')`
      justify-content: space-between;
    `}
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.light.lighter};
    font-weight: 500;
    margin-right: ${theme.spacings.md};
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
