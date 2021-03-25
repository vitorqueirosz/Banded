import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `,
};

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    height: 56px;
    width: 100%;
    border-radius: ${theme.border.radius};
    border: none;
    margin-top: ${theme.spacings.sm};
    color: ${theme.colors.light.lighter};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.lg};
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #18956f;
    }

    ${!!color && buttonModifiers[color](theme)}


  `}
`;
