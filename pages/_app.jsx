import React from 'react';
import Head from 'next/head';

import '../node_modules/nprogress/nprogress.css';
import '../styles/globalStyles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
