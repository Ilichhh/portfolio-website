import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/roboto-mono/400.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Roboto Mono', monospace;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
