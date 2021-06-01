import styled, { css, DefaultTheme } from 'styled-components';

const optionModifiers = {
  hasPadding: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsm};
  `,
};

export const Option = styled.div<{ hasPadding?: boolean }>`
  ${({ theme, hasPadding }) => css`
    border-top: 1px solid ${theme.colors.dark.light};
    z-index: ${theme.layers.base};

    > span {
      color: ${theme.colors.light.lighter};
    }

    ${hasPadding && optionModifiers.hasPadding(theme)};
  `}
`;

export const MembersList = styled.div`
  // max-height: 100px;
  // overflow-y: auto;
`;
