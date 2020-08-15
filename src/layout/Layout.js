import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cursor from '../components/Cursor/Cursor';

const Layout = ({ children }) => {
  const [isLoaderVisible, setIsLoadedVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoadedVisible(false);
    }, 200);
  }, []);

  return (
    <>
      {isLoaderVisible ? (
        <Loader />
      ) : (
        <>
          <Content>
            <Header />
            {children}
            <Footer />
          </Content>

          <Cursor />
        </>
      )}
    </>
  );
};
const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.color.black};
`;
const Content = styled.div``;

export default Layout;
