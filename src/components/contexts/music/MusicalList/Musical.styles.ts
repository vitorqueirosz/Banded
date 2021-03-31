import styled, { css } from 'styled-components';

type ContainerProps = {
  show: boolean;
}

const containerModifiers = {
  show: () => css`
    display: block;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, show }) => css`
    display: none;
    padding-top: ${theme.spacings.sm};

    ${show && containerModifiers.show}
  `}
`;
