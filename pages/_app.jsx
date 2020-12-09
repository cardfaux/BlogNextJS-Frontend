import React from 'react';
import Head from 'next/head';

import ChatComponent from '../components/shared/ChatComponent';
import '../node_modules/nprogress/nprogress.css';
import '../styles/globalStyles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='theme-color' content='#4285f4' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css' />
      </Head>
      <Component {...pageProps} />
      {/* <ChatComponent /> */}
    </>
  );
}

export default MyApp;
