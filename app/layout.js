"use client";

import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';
import Footer from './components/footer';
import Header from './components/header';
import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';

export default function RootLayout({ children }) {


  return (
    <html>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
