import React from 'react';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  color: ${props => props.theme.color.white};
`;
const SlideTitle = styled.h3`
  margin-bottom: 0.4em;
  font-weight: 300;
`;
const SlideImage = styled.img`
  border: 1px solid ${props => props.theme.color.white};
  display: block;
  height: 50vh;
  width: 100%;
  object-fit: cover;
`;
const SlideTechnologies = styled.p`
  margin: 0.6em 0;
  font-size: 1.7rem;
  color: ${props => props.theme.color.blue};
`;

const Slide = ({ content }) => (
  <SlideWrapper>
    <SlideTitle>{content.title}</SlideTitle>
    <SlideImage src={content.imgUrl} alt="" />
    <SlideTechnologies>{content.tech}</SlideTechnologies>
  </SlideWrapper>
);

export default Slide;
