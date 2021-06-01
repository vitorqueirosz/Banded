import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  ${({ theme }) => css`
    line-height: ${theme.font.lineHeight.sm};
    color: ${theme.colors.neutral.light};
    margin-bottom: ${theme.spacings.xsm};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    margin-bottom: ${theme.spacings.xsm};
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    margin-bottom: ${theme.spacings.xsm};
  `}
`;

export const ShortTitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    margin-bottom: ${theme.spacings.xsm};
  `}
`;
