import styled, { css, DefaultTheme } from 'styled-components';
import { AvatarProps } from 'components/structure';

const wrapperModifiers = {
  small: () => css`
    min-width: 4.0rem;
    height: 4.0rem;
  `,
  medium: () => css`
    min-width: 6.0rem;
    height: 6.0rem;
  `,
  large: () => css`
    min-width: 8.0rem;
    height: 8.0rem;
  `,
  hasBackground: (theme: DefaultTheme) => css`
   background: ${theme.colors.primary};
   border-radius: 50%;
   padding: ${theme.spacings['2xs']};
  `,
};

type WrapperProps = {
  hasBackground?: boolean;
} & Pick<AvatarProps, 'size'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, hasBackground }) => css`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;


    ${size && wrapperModifiers[size]}
    ${hasBackground && wrapperModifiers.hasBackground(theme)}
  `}
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
