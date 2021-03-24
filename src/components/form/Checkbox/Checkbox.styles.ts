import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings['2xs']} 0 ${theme.spacings.sm};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: #aaffe5;
    font-weight: 500;
    margin-right: ${theme.spacings.xsm};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    width: 18px;
    height: 16px;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.dark.darker};
    outline: none;


    &:checked {
      background ${theme.colors.primary};
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;
