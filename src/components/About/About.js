import React from 'react';
import styled from 'styled-components';

import Section from '../General/Section';
import Images from './Images';
import { about } from '../../content/content';

const TextWrapper = styled.div``;
const Title = styled.h2`
  font-size: calc(0.5vw + 3em);
  margin-bottom: 4rem;
`;
const Text = styled.p`
  color: ${props => props.theme.color.blackLight};
  margin-bottom: 7rem;
`;
const ListTitle = styled.h3`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ListItem = styled.li`
  margin-bottom: 1rem;

  &::before {
    content: '>';
    color: ${props => props.theme.color.blue};
    background: ${props => props.theme.color.blue};
    margin-right: 1rem;
  }
`;

const About = () => (
  <Section idName="about_me" columns={2}>
    <TextWrapper>
      <Title>{about.title}</Title>
      <Text>{about.text}</Text>

      <ListTitle>{about.subtitle}</ListTitle>
      <List>
        {about.skills.dev.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </TextWrapper>

    <Images />
  </Section>
);

export default About;
