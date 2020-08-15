import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => (
  <Content>
    <Header />
    {children}
    <Footer />
  </Content>
);

=======
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

>>>>>>> de2711bfc6ca794d97b94adc437fa7e444c4e6f3
const Content = styled.div``;

export default Layout;
