import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: 0;
    height: 100%;
    width: ${theme.elements.relations};
    background: ${theme.colors.dark.element};
  `}
`;
