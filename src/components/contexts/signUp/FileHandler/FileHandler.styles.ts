import styled, { css } from 'styled-components';

const divisorModifiers = {
  hasImage: () => css`
    > div {
      width: calc(100% - 8rem);
      margin-left: auto;
    }

    ${AlbumImage} {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  `,
};

export const Divisor = styled.div<{ hasImage: boolean }>`
  ${({ theme, hasImage }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    transition: width 0.3s ease-in-out;
    justify-content: space-between;
    margin-bottom: ${theme.spacings['2xs']};
    position: relative;

    ${hasImage && divisorModifiers.hasImage()}
  `}
`;

export const AlbumImage = styled.img`
  width: 6rem;
  height: 6rem;
  left: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  border-radius: 50%;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
