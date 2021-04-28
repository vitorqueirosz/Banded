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

    ${hasBorder && containerModifiers.hasBorder(theme)}
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings['2xs']};
    width: 100%;

    > span {
      color: ${theme.colors.neutral.light};
    }

    > p {
      color: ${theme.colors.light.gray};
    }
  `}
`;
