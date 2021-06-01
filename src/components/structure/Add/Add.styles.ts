import styled, { css, DefaultTheme } from 'styled-components';
import { AddProps } from 'components/structure';

type ContainerProps = Pick<AddProps, 'align' | 'hasClose' | 'hasMargin'>;

const containerModifiers = {
  hasMargin: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.xsm};
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, align = 'start', hasClose, hasMargin = false }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    span {
      color: ${theme.colors.light.lighter};
      margin-left: ${theme.spacings['2xs']};
    }

    ${align === 'end' &&
    css`
      width: 100%;
      justify-content: flex-end;
    `}

    ${hasClose &&
    css`
      svg {
        &:last-child {
          position: absolute;
          right: ${theme.spacings['2xs']};
        }
      }
    `}

    ${hasMargin && containerModifiers.hasMargin(theme)}
  `}
`;
