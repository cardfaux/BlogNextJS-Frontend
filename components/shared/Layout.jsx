import React from 'react';

import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <p>footer</p>
    </>
  );
};

export default Layout;
