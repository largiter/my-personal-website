import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useMousePosition from '../General/useMousePosition';
import useScroll from '../General/useScroll';
import usePrevious from '../General/usePrevious';
import { doAnimation } from '../../state/actions/cursorA';

const Cursor = () => {
  const dispatch = useDispatch();
  const cursorRef = useRef(null);
  const [tlHover] = useState(gsap.timeline({ paused: true }));
  const [tlHover2] = useState(gsap.timeline({ paused: true }));
  const { currentAnimation } = useSelector(state => state.cursorR);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const setupAnimation = () => {
      tlHover.to(cursorRef.current, { scale: 1.5 });
    };

    setupAnimation();
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      gsap.to(cursorRef.current, { duration: 0.2, x: mousePosition.x, y: mousePosition.y });
    };

    handleMouseMove();
  }, [mousePosition]);

  useEffect(() => {
    if (currentAnimation === 'scale') {
      tlHover.play();
    } else if (currentAnimation === 'scale2') {
      tlHover2.play();
    } else {
      tlHover.reverse();
      tlHover2.reverse();
    }
  }, [currentAnimation]);

  useEffect(() => {
    const clickableElement = document.querySelectorAll('a');

    if (Array.from(clickableElement).includes(mousePosition.target)) {
      dispatch(doAnimation('scale'));
    } else {
      dispatch(doAnimation(null));
    }
  }, [mousePosition]);

  return (
    <CursorWrapper ref={cursorRef}>
      <CursorBody />
    </CursorWrapper>
  );
};

const CursorWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  top: 0;
  left: 0;
  transform-origin: 5% 5%;
`;
const CursorBody = styled.div`
  height: 60px;
  width: 60px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transform: translateX(-45%) translateY(-45%);
`;

export default Cursor;
