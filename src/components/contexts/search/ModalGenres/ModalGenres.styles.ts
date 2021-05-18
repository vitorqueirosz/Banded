import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.lg};
    width: 100%;
  `}
`;

export const Divisor = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr;
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    font-size: ${theme.font.sizes.lg};
  `}
`;
