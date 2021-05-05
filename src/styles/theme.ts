export default {
  elements: {
    nav: '8.0rem',
    relations: '36rem',
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsm: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xlg: '2.0rem',
      '2xlg': '3.2rem',
    },
    lineHeight: {
      '2xs': '0.8rem',
      xsm: '1.6rem',
      sm: '2.4rem',
      md: '3.2rem',
    },
  },
  colors: {
    primary: '#1DB98A',
    secondary: '#FF5005',
    dark: {
      light: '#292929',
      darker: '#1C1C1C',
      info: '#212121',
      element: '#0c1015',
    },
    light: {
      lighter: '#DEDEEA',
      gray: '#B6B6B6',
      darkGray: '#CCC',
    },
    neutral: {
      light: '#FFF',
      black: '#000',
    },
    message: {
      primary: '#0D523D',
      secondary: '#565555',
    },
    error: '#FF5E5E',
    bgModal: 'rgba(0, 0, 0, 0.9)',
  },
  spacings: {
    '2xs': '0.8rem',
    xsm: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xlg: '4.8rem',
    '2xlg': '6.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;
