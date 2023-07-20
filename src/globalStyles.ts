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
    font-family: "Work Sans", Sans-Serif;
    font-size: 24px;
    background-color: ${theme.colors.bgLight};
    color: ${theme.colors.textDark};
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  a {
    color: ${theme.colors.textDark};
  }
  p {
    margin-top: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
