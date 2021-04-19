import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div``;

const tabModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.neutral.light};
    border-color: ${theme.colors.primary};
  `,
};

export const Tab = styled.span<{ active: boolean}>`
  ${({ theme, active }) => css`
    color: ${theme.colors.light.gray};
    border-bottom: 2px solid transparent;

    ${active && tabModifiers.active(theme)}
  `}
`;
