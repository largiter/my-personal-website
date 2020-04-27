import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import gsap from 'gsap';

import { breakpoints, media } from '../../styles/media';
import useScroll from '../General/useScroll';
import useWindowSize from '../General/useWindowSize';
import useDidMountEffect from '../General/useDidMountEffect';

import Logo from './Logo';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const HeaderWrapper = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  padding: ${props => (props.isHeaderPadding === true ? props.theme.innerSpace : `2rem ${props.theme.innerSpace}`)};
  grid-template-columns: auto 1fr 4rem;
  grid-template-rows: ${props => props.theme.headerHeight};
  align-items: center;

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
  margin-right: 0;
  margin-left: auto;
  margin-right: 3rem;
`;

const Header = ({ menuItems }) => {
  const headerWrapper = useRef(null);
  const mNavVisibility = useSelector(state => state.mNavVisibility);
  const scroll = useScroll();
  const [tlHeader] = useState(gsap.timeline({ paused: true }));
  const [tlHeaderBg] = useState(gsap.timeline({ paused: true }));
  const [isHeaderPadding, setIsHeaderPadding] = useState(true);
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    const header = headerWrapper.current;
    tlHeader.to(header, { duration: 0.3, y: '-100%' });

    const headerBg = header.children[0];
    tlHeaderBg.to(headerBg, { duration: 0.3, x: '100%' });
    tlHeaderBg.to(headerBg, { duration: 0.3 });
  }, [tlHeader, tlHeaderBg]);

  useDidMountEffect(() => {
    mNavVisibility ? tlHeaderBg.play() : tlHeaderBg.reverse();
  }, [mNavVisibility]);

  useDidMountEffect(() => {
    scroll.direction === 'down' ? tlHeader.play() : tlHeader.reverse();
    scroll.y === 0 ? setIsHeaderPadding(true) : setIsHeaderPadding(false);
  }, [scroll]);

  return (
    <>
      {windowWidth > breakpoints.md ? '' : <MobileNav />}

      <HeaderWrapper ref={headerWrapper} isHeaderPadding={isHeaderPadding}>
        <HeaderBg />
        <Logo />

        {windowWidth > breakpoints.md ? (
          <DesktopNav menuItems={menuItems} />
        ) : (
          <>
            <Button href="#portfolio">PORTFOLIO</Button>
            <Hamburger />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;

// FIXME - iphone safari - header hide on top (browser bounce)
// FIXME - mobile all - block portfolio click when mNav visible
