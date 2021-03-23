import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    src: local(''),
      url('../assets/fonts/ubuntu-v15-latin-300.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../assets/fonts/ubuntu-v15-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('../assets/fonts/ubuntu-v15-latin-700.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }


  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};

      background: ${theme.colors.neutral.black};
    }
  `}
`;
