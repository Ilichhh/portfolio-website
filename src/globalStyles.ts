import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

import '@fontsource/roboto-mono/400.css';
import '@fontsource/work-sans';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: "Work Sans";
    font-size: 24px;
    background-color: ${theme.colors.bgLight};
    color: ${theme.colors.textDark};
  }
  a {
    text-decoration: none;
    color: ${theme.colors.textDark};
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
