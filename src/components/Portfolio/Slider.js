import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import useDidMountEffect from '../General/useDidMountEffect';
import useWindowSize from '../General/useWindowSize';
import { portfolio } from '../../content/content';

import Slide from './Slide';
import Arrows from './Arrows';

const Wrapper = styled.div`
  user-select: none;
  cursor: grab;
`;
const AllSlides = styled.div`
  z-index: 1;
  position: relative;
  will-change: transform;
  pointer-events: none;

  display: grid;
  grid-template-columns: repeat(4, ${props => props.sliderSetup.slideWidth}vw);
  grid-gap: ${props => props.sliderSetup.gap}vw;
`;

const Slider = () => {
  const allSlides = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startPosition, setStartPosition] = useState({});
  const [endPosition, setEndPosition] = useState({});
  const [notSlideArea, setNotSlideArea] = useState({ x: 70, y: 40 });
  const slidesCount = portfolio.projects.length;
  const [sliderSetup, setSliderSetup] = useState({ slideWidth: 80, gap: 3 });

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth > 700 && windowWidth <= 1100) {
      setSliderSetup({ slideWidth: 60, gap: 3 });
    } else if (windowWidth > 1150) {
      setSliderSetup({ slideWidth: 33, gap: 3 });
      setNotSlideArea({ x: 30, y: 200 });
    } else {
      setSliderSetup({ slideWidth: 80, gap: 3 });
      setNotSlideArea({ x: 70, y: 40 });
    }
  }, [windowWidth]);

  const getTouchPosition = e => ({
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  });

  const getCursorPosition = e => ({
    x: e.clientX,
    y: e.clientY,
  });

  const slideLeft = () => {
    setCurrentSlide(currentSlide - 1);
    gsap.to(allSlides.current, {
      duration: 0.2,
      x: `+=${sliderSetup.slideWidth + sliderSetup.gap}vw`,
    });
  };

  const slideRight = () => {
    setCurrentSlide(currentSlide + 1);
    gsap.to(allSlides.current, {
      duration: 0.2,
      x: `-=${sliderSetup.slideWidth + sliderSetup.gap}vw`,
    });
  };

  const validateTouch = (start, end) => {
    if (end.y < start.y + notSlideArea.y && end.y > start.y - notSlideArea.y) {
      if (end.x > start.x + notSlideArea.x) {
        return currentSlide > 0 ? slideLeft() : null;
      }
      if (end.x < start.x - notSlideArea.x) {
        return currentSlide < slidesCount - 1 ? slideRight() : null;
      }
    }
  };

  useDidMountEffect(() => {
    validateTouch(startPosition, endPosition);
  }, [endPosition]);

  return (
    <Wrapper
      onTouchStart={e => setStartPosition(getTouchPosition(e))}
      onTouchEnd={e => setEndPosition(getTouchPosition(e))}
      onMouseDown={e => setStartPosition(getCursorPosition(e))}
      onMouseUp={e => setEndPosition(getCursorPosition(e))}
    >
      <AllSlides ref={allSlides} sliderSetup={sliderSetup}>
        <Arrows />
        {portfolio.projects.map((project, index) => (
          <Slide key={index} content={project} />
        ))}
      </AllSlides>
    </Wrapper>
  );
};

export default Slider;
