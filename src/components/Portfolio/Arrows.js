import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { media } from '../../styles/media';

const ArrowsWrapper = styled.i`
  z-index: 0;
  position: absolute;
  top: -5vmax;
  left: 60vw;

  ${media.xl`
    display: block;
    top: initial;
    bottom: 15vw;
    left: -7.5vw;
  `}
`;
const Arrow = styled.div`
  border: solid ${props => props.theme.color.blue};
  opacity: 0.3;
  border-width: 0 0.7vmax 0.7vmax 0;
  display: inline-block;
  padding: 0.7vmax;
  transform: rotate(-45deg);
`;

const Arrows = () => {
  const arrowsWrapper = useRef(null);

  useEffect(() => {
    const arrow = arrowsWrapper.current.children;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(arrow[2], { opacity: 0.3 });
    tl.to(arrow[0], { opacity: 0.8 }, '-=0.5');
    tl.to(arrow[0], { opacity: 0.3 });
    tl.to(arrow[1], { opacity: 0.8 }, '-=0.5');
    tl.to(arrow[1], { opacity: 0.3 });
    tl.to(arrow[2], { opacity: 0.8 }, '-=0.5');
  }, []);
  return (
    <ArrowsWrapper ref={arrowsWrapper}>
      <Arrow />
      <Arrow />
      <Arrow />
    </ArrowsWrapper>
  );
};

export default Arrows;
