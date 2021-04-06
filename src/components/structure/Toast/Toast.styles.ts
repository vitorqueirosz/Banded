import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { ToastItemProps } from '.';

type WrapperProps = Pick<ToastItemProps, 'type' | 'show' |'hasMarginTop'>

const wrapperModifiers = {
  hasMarginTop: () => css``,
  show: () => css`
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    pointer-events: all;
  `,
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  error: (theme: DefaultTheme) => css`
    background: ${theme.colors.error};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, type, show, hasMarginTop }) => css`
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 64px;
      border-radius: ${theme.border.radius};
      transform: translateX(100%);
      transition: all 0.4s ease-in-out, opacity 0.4s 0.05s ease-in-out;
      will-change: transform, opacity;
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: ${theme.spacings['2xs']};
      right: ${theme.spacings['2xs']};
      padding: ${theme.spacings['2xs']} ${theme.spacings.xsm};

      ${media.lessThan('medium')`
        width: auto;
        left: ${theme.spacings['2xs']};
      `}

      ${hasMarginTop && wrapperModifiers.hasMarginTop()}
      ${!!type && wrapperModifiers[type](theme)}
      ${show && wrapperModifiers.show()}
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    margin-right: ${theme.spacings['2xs']};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.lighter};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings['2xs']};
    right: ${theme.spacings['2xs']};
    cursor: pointer;
  `}
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
`;
