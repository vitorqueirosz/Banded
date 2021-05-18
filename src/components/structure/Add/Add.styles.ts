import styled, { css } from 'styled-components';
import { AddProps } from 'components/structure';

type ContainerProps = Pick<AddProps, 'onEnd' | 'hasClose'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, onEnd, hasClose }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    span {
      color: ${theme.colors.light.lighter};
      margin-left: ${theme.spacings['2xs']};
    }

    ${onEnd &&
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
  `}
`;
