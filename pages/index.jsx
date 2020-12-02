import React from 'react';
import styled from 'styled-components';

import Layout from '../components/shared/Layout';

const index = () => {
  return (
    <Layout>
      <Title>This is the index page</Title>
    </Layout>
  );
};

export default index;

const Title = styled.h1`
  color: red;
`;
