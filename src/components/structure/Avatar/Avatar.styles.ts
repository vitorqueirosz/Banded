import styled, { css } from 'styled-components';
import { AvatarProps } from 'components/structure';

const imageModifiers = {
  small: () => css`
    width: 4.0rem;
    height: 4.0rem;
  `,
  medium: () => css`
    width: 6.0rem;
    height: 6.0rem;
  `,
  large: () => css`
    width: 8.0rem;
    height: 8.0rem;
  `,
};

export const Image = styled.img<Pick<AvatarProps, 'size'>>`
  ${({ size }) => css`
    border-radius: 50%;

    ${size && imageModifiers[size]}
  `}
`;
