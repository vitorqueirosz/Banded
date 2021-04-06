import { ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { OverlayProps } from '.';

const wrapperModifiers = {
  show: () => css`
    transform: translateX(0);
  `,
};

type ButtonTypes =
  | LinkProps
  | ButtonHTMLAttributes<HTMLButtonElement>

export const Wrapper = styled.div<Pick<OverlayProps, 'show'>>`
  ${({ theme, show }) => css`
    background: ${theme.colors.dark.element};
    padding: ${theme.spacings.lg} ${theme.spacings.xsm};
    width: 60%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    position: fixed;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};

    ${show && wrapperModifiers.show()}
  `}
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    > svg {
      cursor: pointer;
    }
`;

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      color: ${theme.colors.light.lighter};
      margin-left: ${theme.spacings['2xs']};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: ${theme.spacings.lg};
  `}
`;

export const Option = styled.button<ButtonTypes>`
  ${({ theme }) => css`
    color: ${theme.colors.light.gray};
    margin-bottom: ${theme.spacings.xsm};
    font-weight: 500;

    border-bottom: 1px solid ${theme.colors.dark.darker};
    padding-bottom: ${theme.spacings.xsm};
    background: none;
    text-decoration: none;

    &:last-child {
      border: none;
      margin-top: ${theme.spacings.xsm};
      outline: none;
    }
  `}
`;
