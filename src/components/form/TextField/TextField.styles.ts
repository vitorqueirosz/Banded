import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from 'components/form';

type WrapperProps = Pick<TextFieldProps, 'color' | 'isSearch'> & {
  hasError: boolean;
};

const wrapperModifiers = {
  color: (theme: DefaultTheme) => css`
    ${Input} {
      background: ${theme.colors.light.lighter};
    }
    ${Input}, ${Label} {
      color: ${theme.colors.dark.info};
    }
  `,
  normal: () => css`
    height: 5.4rem;
  `,
  small: () => css`
    height: 4.6rem;
    & + ${Label} {
      top: -10%;
    }
  `,
  xsmall: () => css`
    height: 3.6rem;
    & + ${Label} {
      top: -12%;
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
    height: 6.8rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, isSearch, hasError }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings['2xs']};

    ${isSearch && wrapperModifiers.isSearch(theme)}
    ${color === 'secondary' && wrapperModifiers.color(theme)}
    ${hasError && wrapperModifiers.hasError()}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: none;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-ease-in-out;

    > svg {
      position: absolute;
      left: ${theme.spacings['2xs']};
    }
  `}
`;

type InputProps = Pick<TextFieldProps, 'inputSize'> & {
  hasLabel?: boolean;
};

export const Input = styled.input<InputProps>`
  ${({ theme, inputSize, hasLabel }) => css`
    width: 100%;
    background: ${theme.colors.dark.darker};
    border: none;
    padding: 0 ${theme.spacings.xsm};
    max-height: 100%;
    position: relative;
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

    ${hasLabel &&
    css`
      &:not(:placeholder-shown) {
        padding-top: ${theme.spacings['2xs']};
      }
    `}

    &:active,
    &:focus {
      border-color: ${theme.colors.primary};
    }

    ${inputSize && wrapperModifiers[inputSize]}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    line-height: ${theme.font.lineHeight.md};
    font-size: ${theme.font.sizes.xsm};
    position: absolute;
    top: -8%;
    margin-left: ${theme.spacings.xsm};
    transition: all 0.2s ease-in-out;
  `}
`;
