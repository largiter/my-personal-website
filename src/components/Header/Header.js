import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import gsap from 'gsap';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { breakpoints, media } from '../../styles/media';
import useScroll from '../General/useScroll';
import useWindowSize from '../General/useWindowSize';
import useDidMountEffect from '../General/useDidMountEffect';

import Logo from './Logo';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = ({ menuItems }) => {
  const headerWrapper = useRef(null);
  const mNavVisibility = useSelector(state => state.mNavVisibility);
  const scroll = useScroll();
  const [tlHeader] = useState(gsap.timeline({ paused: true }));
  const [tlHeaderBg] = useState(gsap.timeline({ paused: true }));
  const [tlHeaderTop] = useState(gsap.timeline({ paused: true }));
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    const header = headerWrapper.current;
    const headerBg = header.children[0];

    tlHeader.to(header, { duration: 0.2, y: '-100%' });

    tlHeaderBg.to(headerBg, { duration: 0.2, x: '100%' });
    // mobile nav fix
    tlHeaderBg.to(headerBg, { duration: 0.2 });

    tlHeaderTop.to(header, { duration: 0.2, marginTop: 0 });
  }, [tlHeader, tlHeaderBg]);

  useDidMountEffect(() => {
    mNavVisibility ? tlHeaderBg.play() : tlHeaderBg.reverse();
  }, [mNavVisibility]);

  useDidMountEffect(() => {
    scroll.direction === 'down' ? tlHeader.play() : tlHeader.reverse();

    scroll.y > 0 ? tlHeaderTop.play() : tlHeaderTop.reverse();
  }, [scroll]);

  return (
    <>
      {windowWidth > breakpoints.md ? '' : <MobileNav />}

      <HeaderWrapper ref={headerWrapper}>
        <HeaderBg />
        <Logo />

        {windowWidth > breakpoints.md ? (
          <DesktopNav menuItems={menuItems} />
        ) : (
          <>
            <Button onClick={() => scrollTo('#portfolio')}>PORTFOLIO</Button>
            <Hamburger />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  padding: ${props => `2rem ${props.theme.innerSpace}`};
  grid-template-columns: auto 1fr 4rem;
  grid-template-rows: ${props => props.theme.headerHeight};
  align-items: center;
  margin-top: calc(${props => props.theme.innerSpace} - 2rem);

  ${media.md`
    grid-template-columns: auto 1fr;
  `}

  & > div {
    &:nth-child(2) {
      height: 100%;
    }
    &:nth-child(4) {
      height: 100%;
    }
  }
`;
const HeaderBg = styled.div`
  z-index: -999;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.color.black};
`;
const Button = styled.a`
  border: 1px solid #46bdc5;
  border-radius: ${props => props.theme.radius};
  color: #46bdc5;
  padding: 0.5rem 1rem;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;
`;

export default Header;

// FIXME - iphone safari - header hide on top (browser bounce)
// FIXME - mobile all - block portfolio click when mNav visible
