import styled, { css } from 'styled-components';
import { MusicProps } from '.';

type WrapperProps = Pick<MusicProps, 'size' | 'type'>;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 60px 1fr;
    background: ${theme.colors.dark.light};
    border-radius: ${theme.border.radius};
    width: 100%;

    > img {
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      width: 100%;
      height: 100%;
    }
  `}
`;

export const MusicContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsm};
    display: flex;
    flex-direction: column;
  `}
`;

export const MusicName = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
  `}
`;

export const ArtistName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.gray};
  `}
`;

export const CloseWrapp = styled.div``;

export const Duration = styled.small``;
