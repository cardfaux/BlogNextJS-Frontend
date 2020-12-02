import React from 'react';
import Link from 'next/link';

import Header from '../components/shared/Header';

import styled from 'styled-components';

export default function Custom404() {
  return (
    <>
      <Header />
      <StyledContainerDiv>
        <h1>404 - Page Not Found</h1>
        <Link href='/'>
          <StyledAnchorLink>Click To Go Back To The Homepage</StyledAnchorLink>
        </Link>
      </StyledContainerDiv>
    </>
  );
}

const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledAnchorLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: rgba(0, 100, 208, 1);
  }
`;
