// @flow
import React from 'react';
import { headerStyles } from '../styles/styles';
import Link from 'next/link';


export default ({children}) => (
  <header className={headerStyles}>
    <h1> Page Title -- {children}</h1>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
    </ul>
  </header>
);