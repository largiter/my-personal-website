import React from 'react';
import styled from 'styled-components';

const imageHeight = '8rem';
const handleImageTextPosition = position => {
  switch (position) {
    case 'top':
      return `
        width: 100%;
        top: -1.2em;
        left: 0;
        text-align: right;
      `;
    case 'bottom':
      return `
        width: 100%;
        bottom: -1.2em;
        left: 0;
      `;
    case 'left':
      return `
        width: ${imageHeight};
        bottom: -1em;
        left: -0.2em;
        transform: rotate(-90deg);
        transform-origin: 0% 100%;
      `;
    case 'right':
      return `
        width: calc(8rem + 1em);
        bottom: 0;
        right: -0.25em;
        transform: rotate(90deg);
        transform-origin: 100% 100%;
        text-align: left;
      `;
    default:
      return 'color: #000; background: #eee;';
  }
};

const ImageWrapper = styled.figure`
  position: relative;
  height: 8rem;
  margin-top: 4rem;
  /* height: ${imageHeight}; */
`;
const Img = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${props => props.theme.radius};
`;
const ImageText = styled.figcaption`
  position: absolute;
  color: ${props => props.theme.color.blackLight};
  line-height: 1em;
  white-space: nowrap;
  font-size: 1.3rem;
  margin: 0;
  ${({ position }) => handleImageTextPosition(position)};
`;

const Image = () => (
  <ImageWrapper>
    <Img src="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80" />

    <ImageText position="top">THINGS FOR WEB</ImageText>
    <ImageText position="bottom">UNIQUE STUFF</ImageText>
    <ImageText position="left">MADE WITH ♡</ImageText>
    <ImageText position="right">MREATIVE</ImageText>
  </ImageWrapper>
);

export default Image;
