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
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0, 123, 255, 1.0)!important;
  }
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 123, 255, 1.0)!important;
  }
  nav.navbar.navbar-expand-md.navbar-light.bg-light a.font-weight-bold.nav-link {
    cursor: pointer;
  }
  button:focus {
  outline: none!important;
}
`;

export default GlobalStyle;
