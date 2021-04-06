import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    & + div {
      margin-top: ${theme.spacings.xsm};
    }
  `}
`;

export const Radio = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.colors.neutral.light};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
    margin-left: ${theme.spacings['2xs']};
  `}
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;
