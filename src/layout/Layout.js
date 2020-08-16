import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Layout = ({ children }) => {
  useEffect(() => {
    const all = ['#about_me', '#portfolio'];

    all.map(id => {
      const { children } = document.querySelector(id);

      return gsap.to(children, {
        scrollTrigger: {
          trigger: children,
          start: '-130%',
          end: '40%',
          markers: true,
        },
        y: 0,
        opacity: 1,
      });
    });
  }, []);

  return (
    <Content>
      <Header />
      {children}
      <Footer />
    </Content>
  );
};

const Content = styled.div``;

export default Layout;
