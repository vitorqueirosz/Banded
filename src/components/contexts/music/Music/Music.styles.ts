import styled, { css } from 'styled-components';
import * as Avatar from 'components/structure/Avatar/Avatar.styles';
import { MusicalItemProps } from '.';

type WrapperProps = Pick<MusicalItemProps, 'type'>;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 15rem 1fr;
    background: ${theme.colors.dark.light};
    border-radius: ${theme.border.radius};
    width: 100%;
    max-width: 45rem;
    height: 12rem;
    max-height: 100%;
    cursor: pointer;


    ${Avatar.Wrapper} {
      width: 100%;
      height: 100%;
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

      > svg {
        width: 8rem;
        height: 8rem;
      }
    }

    ${Avatar.Image} {
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
