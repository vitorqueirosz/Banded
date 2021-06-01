import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsm};
    `}
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

export const TabsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.xsm};
    margin-bottom: ${theme.spacings.sm};

    ${media.lessThan('medium')`
      justify-content: space-between;
    `}
  `}
`;

export const Tab = styled.span<{ active: boolean }>`
  ${({ theme, active }) => css`
    color: ${theme.colors.light.gray};
    border-bottom: 2px solid transparent;
    position: relative;
    margin-right: ${theme.spacings.md};
    cursor: pointer;

    &:after {
      content: '';
      width: 3rem;
      height: 0.3rem;
      background: transparent;
      position: absolute;
      bottom: -0.8rem;
      right: 50%;
      transform: translateX(0%);
      transition: all 0.3s ease-in-out;

      ${media.lessThan('medium')`
        width: 2rem;
      `}
    }

    ${active && tabModifiers.active(theme)}
  `}
`;
