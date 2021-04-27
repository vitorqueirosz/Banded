import styled, { css, DefaultTheme } from 'styled-components';
import { InputProps } from 'components/form';

type WrapperProps = Pick<InputProps, 'color' | 'isSearch' | 'inputSize'> & {
  hasError: boolean;
};

const wrapperModifiers = {
  color: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background: ${theme.colors.light.lighter};
    }
    ${Input}, ${Label} {
      color: ${theme.colors.dark.info};
    }
  `,
  normal: () => css`
    min-height: 5.6rem;
  `,
  small: () => css`
    min-height: 4.6rem;
    ${Label} {
      top: -16%;
    }
  `,
  isSearch: (theme: DefaultTheme) => css`
    ${Input} {
      padding-left: ${theme.spacings.lg};
    }
    ${Label} {
      padding-left: ${theme.spacings.sm};
    }
  `,
  hasError: () => css`
    min-height: 6.8rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, isSearch, inputSize, hasError }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings['2xs']};
    border-radius: ${theme.border.radius};
    /* height: 100%; */

    ${isSearch && wrapperModifiers.isSearch(theme)}
    ${color === 'secondary' && wrapperModifiers.color(theme)}
    ${inputSize && wrapperModifiers[inputSize]}
    ${hasError && wrapperModifiers.hasError()}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.dark.light};
    border-radius: ${theme.border.radius};
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-ease-in-out;

    > svg {
      position: absolute;
      left: 8px;
    }
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    border: none;
    padding: ${theme.spacings.xsm};
    height: 100%;
    outline: none;
    border-radius: ${theme.border.radius};
    border: 1px solid #555;
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.light.lighter};
    font-size: ${theme.font.sizes.md};

    &:placeholder-shown {
      & + ${Label} {
        top: 50%;
        opacity: 0;
        visibility: hidden;
      }
    }

    &:active,
    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.light.gray};
    line-height: ${theme.font.lineHeight.md};
    font-size: ${theme.font.sizes.xsm};
    position: absolute;
    top: -10%;
    margin-left: ${theme.spacings.xsm};
    transition: all 0.2s ease-in-out;
  `}
`;
