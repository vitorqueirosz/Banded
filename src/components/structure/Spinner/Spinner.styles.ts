import styled, { css, DefaultTheme } from 'styled-components';
import { SpinnerProps } from 'components/structure';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    span {
      border-color: ${theme.colors.primary};
      border-bottom-color: transparent;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
  span {
    border-color: ${theme.colors.dark.darker};
    border-bottom-color: transparent;
  }
`,
};

export const Wrapper = styled.div<Pick<SpinnerProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!color && wrapperModifiers[color](theme)}
  `}
`;
