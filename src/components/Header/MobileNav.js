import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import gsap from 'gsap';

import useDidMountEffect from '../General/useDidMountEffect';

import SectionsList from './SectionsList';

const NavigationMain = styled.nav`
  /* //HEADER HEIGHT!!!!!! */
  /* margin-top: 4rem; */
  z-index: 991;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
`;
const BgWrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: repeat(4, 25%);
  grid-template-columns: 1fr;
`;
const BgElement = styled.div`
  background: ${props => props.theme.color.blue};

  &:nth-child(2n) {
    transform: translateX(100%);
  }
  &:nth-child(2n - 1) {
    transform: translateX(-100%);
  }
`;

const MenuList = styled(SectionsList)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;

  & > li {
    text-align: center;
    opacity: 0;
    position: relative;
    font-size: 6rem;
    margin-bottom: 1em;
    overflow: hidden;

    & > div {
      background: ${props => props.theme.color.blue};
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

  a {
    color: ${props => props.theme.color.black};
  }
`;

const Navigation = () => {
  const navigationWrapper = useRef(null);
  const [tl] = useState(gsap.timeline({ paused: true }));
  const mNavVisibility = useSelector(state => state.mNavVisibility);

  useEffect(() => {
    const navigation = navigationWrapper.current;
    const [bgWrapper, menuList] = navigation.children;

    const listItems = menuList.children;
    const listHovers = Array.from(listItems).map(element => element.children);

    gsap.set(navigation, { autoAlpha: 0 });

    tl.set(navigation, { autoAlpha: 1 });
    tl.to(bgWrapper.children, { duration: 0.3, x: 0 });
    tl.set([...listItems, ...listHovers], { autoAlpha: 1 });
    tl.to(listHovers, { duration: 0.3, y: '-100%' });
  }, [tl]);

  useDidMountEffect(() => {
    mNavVisibility ? tl.play() : tl.reverse();
  }, [mNavVisibility]);

  return (
    <NavigationMain ref={navigationWrapper}>
      <BgWrapper>
        <BgElement />
        <BgElement />
        <BgElement />
        <BgElement />
      </BgWrapper>

      <MenuList isMobile />
    </NavigationMain>
  );
};

export default Navigation;
