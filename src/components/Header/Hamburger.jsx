import React, { useRef, useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import gsap from 'gsap';

import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileNav } from '../../state/actions/mNavVisibilityA';

const HamburgerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 0.7rem;
`;
const Stripe = styled.div`
  border-radius: ${props => props.theme.radius};
  background: ${props => props.theme.color.blue};
  width: 100%;
  height: 100%;
  flex-grow: 1;
  transform-origin: 50% 50%;
`;

const Hamburger = () => {
  const hamburgerWrapper = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const theme = useContext(ThemeContext);

  const dispatch = useDispatch();
  const mNavVisibility = useSelector(state => state.mNavVisibility);

  function runHamburgerAction() {
    setIsAnimating(true);
    dispatch(toggleMobileNav());
  }

  useEffect(() => {
    const toggleHamburgerAnimation = async () => {
      const stripes = hamburgerWrapper.current.children;
      const tl = gsap.timeline({ paused: true });

      if (mNavVisibility) {
        tl.to(stripes, { background: theme.color.black });
        tl.to(stripes[0], { y: '1.56rem' }, '-=0.5');
        tl.to(stripes[2], { y: '-1.56rem' }, '-=0.5');
        tl.set(stripes[1], { opacity: 0 });
        tl.to(stripes[0], { rotation: 45 });
        tl.to(stripes[2], { rotation: -45 }, '-=0.5');
      } else {
        tl.to(stripes, { background: theme.color.blue });
        tl.to(stripes[0], { rotation: 0 }, '-=0.5');
        tl.to(stripes[2], { rotation: 0 }, '-=0.5');
        tl.set(stripes[1], { opacity: 1 });
        tl.to(stripes[0], { y: 0 });
        tl.to(stripes[2], { y: 0 }, '-=0.5');
      }
      await tl.play();
      setIsAnimating(false);
    };

    toggleHamburgerAnimation();
  }, [mNavVisibility, theme]);

  return (
    <HamburgerWrapper ref={hamburgerWrapper} onClick={isAnimating ? null : runHamburgerAction}>
      <Stripe />
      <Stripe />
      <Stripe />
    </HamburgerWrapper>
  );
};

export default Hamburger;
