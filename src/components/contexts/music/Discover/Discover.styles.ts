import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.xsm};
    padding-right: ${theme.spacings['2xs']};

    > svg {
      align-self: flex-end;
      margin-right: ${theme.spacings['2xs']};

      @media (max-width: 340px) {
        display: none;
      }
    }

    ${media.lessThan('large')`
      padding-right: 0;
    `}
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.light.lighter};
    margin-right: ${theme.spacings.xsm};

    ${media.lessThan('large')`
      margin-right: ${theme.spacings['2xs']};
    `}
  `}
`;

export const Amount = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.neutral.light};
    flex: 1;
    display: flex;
    justify-content: flex-end;
  `}
`;
