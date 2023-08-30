
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';
import Footer from './components/footer'
import Header from './components/header';
import React, { useState } from 'react';

export default function MyApp(props) {

  const { Component, pageProps } = props;
  const [theme, setTheme] = useState('light');

  const toggleTheme = (event) => {
    setTheme(event.target.value);
    // console.log(theme)
  };


  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header toggleTheme={toggleTheme} theme={theme} />
        <Component {...pageProps} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
