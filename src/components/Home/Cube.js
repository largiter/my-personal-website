import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { breakpoints } from '../../styles/media';
import useWindowSize from '../General/useWindowSize';

const SceneWrapper = styled.div`
  padding-top: 2rem;
  perspective: 700px;
  -webkit-perspective: 700px;
`;
const CubeWrapper = styled.div`
  transform: rotateY(20deg) rotateX(0deg);
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 0 auto;
  transform-style: preserve-3d;
`;
const Wall = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.color.blue};
  opacity: 0.6;

  color: ${props => props.theme.color.blue};
  font-size: 2rem;

  &:nth-child(1) {
    transform: translateZ(${props => props.height / 2}px);
    display: flex;
    align-items: flex-end;
  }
  &:nth-child(2) {
    transform: rotateX(180deg) translateZ(${props => props.height / 2}px);
  }
  &:nth-child(3) {
    width: ${props => props.height}px;
    transform: rotateY(-90deg) translateZ(${props => props.height / 2}px);
  }
  &:nth-child(4) {
    width: ${props => props.height}px;
    transform: rotateY(90deg) translateZ(${props => props.width - props.height / 2}px);
  }
  &:nth-child(5) {
    transform: rotateX(90deg) translateZ(${props => props.height / 2}px);
  }
  &:nth-child(6) {
    transform: rotateX(-90deg) translateZ(${props => props.height / 2}px);
  }
`;

const Cube = () => {
  const cubeWrapper = useRef(null);
  const [cubeSize, setCubeSize] = useState('small');

  const allCubeSizes = {
    small: {
      width: 250,
      height: 50,
    },
    medium: {
      width: 270,
      height: 70,
    },
    big: {
      width: 400,
      height: 100,
    },
  };

  const windowWidth = useWindowSize().width;

  useEffect(() => {
    if (windowWidth < breakpoints.xs) {
      setCubeSize('small');
    } else if (windowWidth > breakpoints.xs && windowWidth < breakpoints.md) {
      setCubeSize('medium');
    } else if (windowWidth > breakpoints.md) {
      setCubeSize('big');
    }
  }, [windowWidth]);

  useEffect(() => {
    const cube = cubeWrapper.current;
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cube, { duration: 15, rotateX: -360, ease: 'none' });
  }, []);

  return (
    <SceneWrapper>
      <CubeWrapper ref={cubeWrapper} height={allCubeSizes[cubeSize].height} width={allCubeSizes[cubeSize].width}>
        {[...Array(6)].map((_, index) => (
          <Wall key={index} height={allCubeSizes[cubeSize].height} width={allCubeSizes[cubeSize].width}>
            {index === 0 ? <p>HELLO</p> : ''}
          </Wall>
        ))}
      </CubeWrapper>
    </SceneWrapper>
  );
};

export default Cube;
