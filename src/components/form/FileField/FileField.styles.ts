import styled, { css } from 'styled-components';

const containerModifiers = {
  small: () => css`
    width: 13rem;
  `,
};

export const Container = styled.div<{ size: 'small' | 'normal' }>`
  ${({ theme, size }) => css`
    width: 100%;
    border: none;
    background: ${theme.colors.dark.darker};
    padding: ${theme.spacings.xsm};
    height: 5.6rem;
    outline: none;
    border-radius: ${theme.border.radius};
    border: 1px solid #555;
    transition: all 0.2s ease-in-out;
    font-size: ${theme.font.sizes.md};

    > input {
      display: none;
    }

    > span {
      color: #999;
    }

    ${size === 'small' && containerModifiers.small()};
  `}
`;
