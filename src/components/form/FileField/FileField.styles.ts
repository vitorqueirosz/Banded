import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    background: ${theme.colors.dark.light};
    padding: ${theme.spacings.xsm};
    height: 5.6rem;
    outline: none;
    border-radius: ${theme.border.radius};
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    font-size: ${theme.font.sizes.md};

    > input {
      display: none;
    }

    > span {
      color: #999;
    }
  `}


`;
