import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';
import Footer from './components/footer';
import Header from './components/header';
import React, { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = (event) => {
    setTheme(event.target.value);
    // console.log(theme)
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header toggleTheme={toggleTheme} isOpen={isOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <Component {...pageProps} theme={theme} isOpen={isOpen} />
      <Footer theme={theme} isOpen={isOpen}/>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
