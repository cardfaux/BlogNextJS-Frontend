import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  div.collapse.navbar-collapse ul.ml-auto.navbar-nav li.nav-item {
    cursor: pointer;
  }
`;

export default GlobalStyle;
