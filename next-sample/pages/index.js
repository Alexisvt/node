// @flow
import * as React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';

import { somestyles, otherstyles } from '../styles/styles';

export default class HomePage extends React.Component {
  static async getInitialProps() {
    // code will go here to get data
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={somestyles}>
        <Head>
          <title>Next -- {`will insert page title here`}</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <script src='/register.js' />
        </Head>
        <Header>
          Page Title
        </Header>
        <div className={otherstyles}>
          <h2> A Header </h2>
          <p>Some text for my page</p>
        </div>
        <Footer />
      </div>
    );
  }
}