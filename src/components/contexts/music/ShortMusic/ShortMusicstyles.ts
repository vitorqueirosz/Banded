import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
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
  `}
`;

export const CloseWrapp = styled.div`
  ${({ theme }) => css`
    background: #888888;
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
