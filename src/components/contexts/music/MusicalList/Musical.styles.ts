import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ContainerProps = {
  show: boolean;
}

const containerModifiers = {
  show: () => css`
    display: flex;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, show }) => css`
    display: none;
    padding-top: ${theme.spacings.sm};
    grid-gap: ${theme.spacings.md} ${theme.spacings.lg};
    flex-wrap: wrap;

    ${media.lessThan('large')`
      flex-direction: column;
      align-items: center;
    `}

    ${show && containerModifiers.show}
  `}
`;
