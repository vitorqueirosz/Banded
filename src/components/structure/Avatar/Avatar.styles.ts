import styled, { css, DefaultTheme } from 'styled-components';
import { AvatarProps } from 'components/structure';

const wrapperModifiers = {
  xsmall: () => css`
    min-width: 3rem;
    height: 3rem;
  `,
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  normal: () => css`
    min-width: 5rem;
    height: 5rem;
  `,
  medium: () => css`
    min-width: 6rem;
    max-width: 6rem;
    height: 6rem;
  `,
  large: () => css`
    min-width: 8rem;
    height: 8rem;
  `,
  hasBackground: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    border-radius: 50%;
    padding: ${theme.spacings['2xs']};
  `,
};

type WrapperProps = {
  hasBackground?: boolean;
} & Pick<AvatarProps, 'size'>;

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
  object-fit: cover;
`;
