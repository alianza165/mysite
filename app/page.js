import React from 'react';
import Body from './components/body';

export default function Home({ theme, isOpen }) {
  console.log(theme);
  return (
    <div>
      <Body />
    </div>
  );
}
