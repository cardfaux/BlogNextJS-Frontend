import React from 'react';

import Header from './Header';
import GlobalStyle from '../../styles/globalStyles';

const Layout = (props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
