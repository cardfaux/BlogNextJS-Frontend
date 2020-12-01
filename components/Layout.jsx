import React from 'react'

const Layout = (props) => {
  return (
    <>
      <p>header</p>
        {props.children}
      <p>footer</p>
    </>
  )
}

export default Layout;
