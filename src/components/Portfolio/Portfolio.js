import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';

import Slider from './Slider';
import Section from '../General/Section';

const TopWrapper = styled.div`
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr;

  ${media.md`
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 2em;
  `}
`;
const Title = styled.h2`
  font-size: calc(0.5vw + 3em);
  color: ${props => props.theme.color.white};
`;
// const Annotation = styled.p`
//   color: ${props => props.theme.color.whiteDark};
// `;

const Projects = () => (
  <Section idName="portfolio" background="dark" columns={1}>
    <TopWrapper>
      <Title>Portfolio</Title>
      {/* <Annotation>click project for details</Annotation> */}
    </TopWrapper>

    <Slider />
  </Section>
);

export default Projects;
