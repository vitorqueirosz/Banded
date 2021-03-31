import styled, { css } from 'styled-components';

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
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.light.lighter};
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
