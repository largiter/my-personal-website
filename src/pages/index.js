import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/seo';

import GlobalStyle from '../styles/global';
import Theme from '../styles/theme';

import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Layout from '../layout/Layout';

const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <SEO title="Wiktor Kocik - PORTFOLIO - Front-End Developer" />

    <Layout>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Layout>

    <GlobalStyle />
  </ThemeProvider>
);

export default IndexPage;
