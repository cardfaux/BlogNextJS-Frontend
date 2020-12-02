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
  nav.navbar.navbar-expand-md.navbar-light.bg-light a.font-weight-bold.nav-link {
    cursor: pointer;
  }
`;

export default GlobalStyle;
