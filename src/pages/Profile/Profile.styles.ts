import { WrapperToOutlet } from 'components/structure';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled(WrapperToOutlet)`
  ${({ theme }) => css`
    padding: 0 0 ${theme.spacings['2xlg']} 0;
  `}
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};
    width: 100%;
    height: auto;
    display: flex;
    background: linear-gradient(
        180deg,
        rgba(0, 255, 178, 0.161) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      #000000;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsm};
    `}
  `}
`;

export const UserChip = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;

    > h3 {
      margin-top: ${theme.spacings['2xs']};
      color: ${theme.colors.neutral.light};
      font-size: ${theme.font.sizes.lg};
    }

    > span {
      color: ${theme.colors.light.gray};
      font-size: ${theme.font.sizes.sm};
      margin-top: calc(${theme.spacings['2xs']} / 2);
    }

    > button {
      position: absolute;
      padding: calc(${theme.spacings['2xs']} / 2);
      display: flex;
      right: -${theme.spacings['2xs']};
      background: ${theme.colors.primary};
      border-radius: 50%;
      border: none;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export const MusicalInfos = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.xsm};
    margin-left: ${theme.spacings.sm};
    width: 100%;

    ${media.lessThan('medium')`
      justify-content: space-between;
    `}
  `}
`;

export const MusicInfo = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xsm};

    ${media.lessThan('medium')`
      padding: 0;
    `}
  `}
`;

export const MusicKey = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.gray};
  `}
`;

export const MusicValue = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
  `}
`;
