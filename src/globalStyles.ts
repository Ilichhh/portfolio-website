import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

import '@fontsource/roboto-mono/400.css';
import '@fontsource/work-sans';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "Work Sans";
    font-size: 24px;
    background-color: ${theme.colors.bgLight};
    color: ${theme.colors.textDark};
  }
  a {
    color: ${theme.colors.textDark};
  }
  p {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
