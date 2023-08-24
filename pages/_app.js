import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';
import Footer from './components/footer'
import Header from './components/header';

export default function MyApp(props) {

  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
