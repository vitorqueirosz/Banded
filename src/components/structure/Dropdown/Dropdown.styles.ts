import { ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ButtonTypes =
  | LinkProps
  | ButtonHTMLAttributes<HTMLButtonElement>

const containerModifiers = {
  show: () => css`
    opacity: 1;
    visibility: visible;
  `,
};

export const Container = styled.div<{ show: boolean }>`
  ${({ theme, show }) => css`
    display: flex;
    flex-direction: column;
    width: 18rem;
    background: ${theme.colors.dark.darker};
    position: absolute;
    bottom: -135%;
    border-radius: ${theme.border.radius};
    border-top-right-radius: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    z-index: ${theme.layers.menu};

    &::after {
      position: absolute;
      content: '';
      border-style: solid;
      border-width: 0 1.6rem 1.6rem 1.6rem;
      border-color: ${theme.colors.dark.darker} transparent;
      border-right: ${theme.colors.dark.darker};
      right: 0;
      top: -1.6rem;
    }

    ${show && containerModifiers.show()}
  `}
`;

export const ButtonDuo = styled.button<ButtonTypes>`
  ${({ theme }) => css`
    background: none;
    padding: ${theme.spacings.xsm};
    border: none;
    color: ${theme.colors.light.gray};
    text-align: left;
    border-bottom: 1px solid ${theme.colors.dark.light};

    &:last-child {
      border-bottom: none;
    }
  `}
`;
