/* eslint-disable quotes */
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../../config';
import { signout, isAuth } from '../../actions/auth';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../node_modules/nprogress/nprogress.css';
import Search from '../blog/Search';
import ActiveLink from './ActiveLink';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar color='light' light expand='md'>
        <ActiveLink href='/'>
          <NavLink className='font-weight-bold'>{APP_NAME}</NavLink>
        </ActiveLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <React.Fragment>
              <NavItem>
                <ActiveLink activeClassName='active' href='/blogs'>
                  <NavLink>Blogs</NavLink>
                </ActiveLink>
              </NavItem>

              <NavItem>
                <Link href='/contact'>
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <ActiveLink activeClassName='active' href='/auth/signin'>
                    <NavLink>Signin</NavLink>
                  </ActiveLink>
                </NavItem>
                <NavItem>
                  <Link activeClassName='active' href='/auth/signup'>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <ActiveLink activeClassName='active' href='/user'>
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </ActiveLink>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <ActiveLink activeClassName='active' href='/admin'>
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </ActiveLink>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/auth/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href='/user/crud/blog'>
                  <NavLink className='btn btn-primary text-light'>Write a blog</NavLink>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </React.Fragment>
  );
};

export default Header;
