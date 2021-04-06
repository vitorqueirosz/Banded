import styled, { css } from 'styled-components';
import * as Avatar from 'components/structure/Avatar/Avatar.styles';
import media from 'styled-media-query';
import { MusicalItemProps } from '.';

type WrapperProps = Pick<MusicalItemProps, 'type'>;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 15rem 1fr;
    background: ${theme.colors.dark.light};
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 42rem;
    height: 12rem;
    max-height: 100%;
    cursor: pointer;


    ${Avatar.Wrapper} {
      width: 100%;
      height: 100%;
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

      > svg {
        width: 6rem;
        height: 6rem;
      }
    }

    ${Avatar.Image} {
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.lessThan('large')`
      grid-template-columns: 10rem 1fr;
    `}
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings['2xs']};
    display: flex;
    align-items: center;
  `}
`;

export const Infos = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    font-size: 2.2rem;
    font-weight: 500;

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.md};
    `}
  `}
`;

export const GenreTitle = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    font-size: ${theme.font.sizes.xsm};
    font-weight: 500;
  `}
`;

export const Genres = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.light.darkGray};
    font-size: ${theme.font.sizes.xsm};
    margin-top: calc(${theme.spacings['2xs']} / 2);
  `}
`;

export const Divisor = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > span {
      color: ${theme.colors.light.darkGray};
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;

export const Discovery = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
