import React from 'react';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

smoothscroll.polyfill();

const Layout = ({ children }) => (
  <Content>
    <Header />
    {children}
    <Footer />
  </Content>
);

const Content = styled.div``;

export default Layout;
