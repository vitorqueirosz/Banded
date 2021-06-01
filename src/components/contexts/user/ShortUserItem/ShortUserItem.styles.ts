import styled, { css } from 'styled-components';
import { CloseWrapp } from 'components/contexts/music/ShortMusicalItem/ShortMusicstyles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-width: 70px;
    display: flex;
    align-items: center;
    padding: calc(${theme.spacings['2xs']} / 2) ${theme.spacings['2xs']};
    flex-direction: column;
    background: ${theme.colors.dark.light};
    border-radius: ${theme.border.radius};

    > strong {
      color: ${theme.colors.light.lighter};
      font-weight: 500;
      margin-top: ${theme.spacings['2xs']};
    }

    > span {
      color: ${theme.colors.light.gray};
      font-size: ${theme.font.sizes.xsm};
    }
  `}
`;

export const CloseWrapper = styled(CloseWrapp)``;
