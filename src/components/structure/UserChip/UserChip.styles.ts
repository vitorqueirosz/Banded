import styled, { css, DefaultTheme } from 'styled-components';
import { UserChipProps } from '.';

type ContainerProps = Pick<UserChipProps, 'size' | 'hasBorder'>;

const containerModifiers = {
  hasBorder: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.dark.light};
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, hasBorder }) => css`
    display: flex;
    width: 100%;
    cursor: pointer;

    padding: ${theme.spacings['2xs']};

    &:hover {
      background: #161c24;
    }

    ${hasBorder && containerModifiers.hasBorder(theme)}
  `}
`;

const divisorModifiers = {
  short: (theme: DefaultTheme) => css`
    width: 10rem;
    margin: auto;
    font-size: ${theme.font.sizes.xsm};
    text-align: center;
  `,
};

export const Divisor = styled.div<{ isShort?: boolean }>`
  ${({ theme, isShort }) => css`
    margin-left: ${theme.spacings['2xs']};
    width: 100%;

    > span {
      color: ${theme.colors.neutral.light};
    }

    > p {
      color: ${theme.colors.light.gray};
      font-size: ${theme.font.sizes.sm};
      margin-top: 0.4rem;
    }

    ${isShort && divisorModifiers.short(theme)}
  `}
`;
