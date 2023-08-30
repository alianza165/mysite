import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';

export default function App(theme) {
  // console.log(theme)

  return (
    <div>
      <Body theme={theme} />
    </div>
  );
}