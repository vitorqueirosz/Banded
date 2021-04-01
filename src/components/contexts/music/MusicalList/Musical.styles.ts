import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ContainerProps = {
  show: boolean;
}

const containerModifiers = {
  show: () => css`
    display: grid;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, show }) => css`
    display: none;
    grid-template-columns: repeat(3, 1fr);
    padding-top: ${theme.spacings.sm};
    grid-gap: ${theme.spacings.md} ${theme.spacings.lg};

    ${media.lessThan('large')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}

    ${show && containerModifiers.show}
  `}
`;
