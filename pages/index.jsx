import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/shared/Layout';

const Index = () => {
  return (
    <Layout>
      <h2>Index page</h2>
      <Link href='/signup'>
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
