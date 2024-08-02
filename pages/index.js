import React from 'react';
import Body from './components/body';

export default function Home({ theme, isOpen }) {
  return (
    <div>
      <Body theme={theme} isOpen={isOpen} />
    </div>
  );
}
