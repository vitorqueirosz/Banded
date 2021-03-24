import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    width: 320px;
    height: 100%;
    margin: ${theme.spacings['2xlg']} 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: height 0.2s ease-in-out;
  `}
`;

export const Scroll = css`
 ${({ theme }) => css`
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px ${theme.colors.dark.light};
      background-color: ${theme.colors.light.darkGray};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.dark.darker};
    }
  `}
`;
