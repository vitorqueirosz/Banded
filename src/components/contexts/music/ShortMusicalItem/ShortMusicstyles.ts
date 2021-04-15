import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 60px;
    width: 60px;
    position: relative;
    margin-right: ${theme.spacings.xsm};

    > img {
      border-radius: ${theme.border.radius};
      width: 100%;
      height: 100%;
    }
  `}
`;

export const MusicName = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    margin-top: ${theme.spacings['2xs']};
    text-align: center;
    font-size: ${theme.font.sizes.sm};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
    max-width: 80%;
  `}
`;

export const CloseWrapp = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark.light};
    border-radius: 50%;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    position: absolute;
    right: -${theme.spacings['2xs']};
    top: -${theme.spacings['2xs']};
    cursor: pointer;
  `}
`;

export const FallbackImage = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
  `}
`;
