import React from 'react';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/seo';

import GlobalStyle from '../styles/global';
import Theme from '../styles/theme';

import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <SEO title="Wiktor Kocik - PORTFOLIO - Front-End Developer" />

    <Header />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />

    <GlobalStyle />
  </ThemeProvider>
);

export default IndexPage;
