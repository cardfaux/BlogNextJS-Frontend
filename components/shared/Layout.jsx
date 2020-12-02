import React from 'react';

import Header from './Header';
import GlobalStyle from '../../styles/globalStyles';

const Layout = (props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {props.children}
      <p>footer</p>
    </>
  );
};

export default Layout;
