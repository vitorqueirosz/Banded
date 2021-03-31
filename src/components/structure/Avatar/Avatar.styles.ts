import styled, { css } from 'styled-components';
import { AvatarProps } from 'components/structure';

const wrapperModifiers = {
  small: () => css`
    width: 4.0rem;
    height: 4.0rem;

    > svg {
      width: 2.0rem;
      height: 2.0rem;
    }
  `,
  medium: () => css`
    width: 6.0rem;
    height: 6.0rem;

    > svg {
      width: 3.0rem;
      height: 3.0rem;
    }
  `,
  large: () => css`
    width: 8.0rem;
    height: 8.0rem;

    > svg {
      width: 4.0rem;
      height: 4.0rem;
    }
  `,
  hasInstrument: () => css`
    background: transparent;
  `,
};

type WrapperProps = {
  instrument: boolean;
} & Pick<AvatarProps, 'size'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, instrument }) => css`
    background: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;



    ${size && wrapperModifiers[size]}
    ${!instrument && wrapperModifiers.hasInstrument()}
  `}
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;

`;
