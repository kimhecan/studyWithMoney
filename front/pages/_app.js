import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configure';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>TIL</title>
    </Head>
    <Component style={{ backgroundColor: '#F2F3F5' }} />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
