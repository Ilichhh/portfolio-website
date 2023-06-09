import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

import '@fontsource/roboto-mono/400.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Roboto Mono', monospace;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.greyLight};
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
