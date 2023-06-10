import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

import '@fontsource/roboto-mono/400.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    background-color: ${theme.colors.bgLight};
    color: ${theme.colors.textLight};
  }
  a {
    text-decoration: none;
    color: ${theme.colors.textLight};
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
