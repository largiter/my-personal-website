import React, { useState, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import gsap from 'gsap';

import useDidMountEffect from '../General/useDidMountEffect';

const Icon = styled.a`
  z-index: 999;
  color: ${props => props.theme.color.blue};
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = () => {
  const mNavVisibility = useSelector(state => state.mNavVisibility);

  const theme = useContext(ThemeContext);
  const icon = useRef(null);

  const [tl] = useState(gsap.timeline({ paused: true }));

  useDidMountEffect(() => {
    tl.to(icon.current, { color: theme.color.black });
    mNavVisibility ? tl.play() : tl.reverse();
  }, [mNavVisibility]);

  return (
    <Icon href="#" ref={icon}>
      WK
    </Icon>
  );
};

export default Logo;
