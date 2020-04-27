import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';
import { home } from '../../content/content';

import Cube from './Cube';
import Icons from './Icons';
import Section from '../General/Section';

const TextWrapper = styled.div`
  margin-top: 10vw;
  width: 100%;

  ${media.md`
    margin-top: 0;
  `}
`;
const Intro = styled.p`
  color: ${props => props.theme.color.white};
  font-weight: 300;
  width: fit-content;
  padding-right: 1rem;
`;

const Name = styled.h1`
  font-size: calc(6vw + 1em);
  text-align: center;
  width: fit-content;
  white-space: nowrap;
  font-weight: 900;
  color: ${props => props.theme.color.white};

  ${media.md`
    font-size: calc(3vw + 1em);
  `}
`;
const Role = styled.h3`
  font-size: calc(1vw + 1em);
  color: ${props => props.theme.color.blue};
  font-weight: 400;
  width: fit-content;
  padding-left: 1rem;
  margin-right: 0;
  margin-left: auto;
`;
const Desc = styled.p`
  margin-top: 3rem;
  margin-bottom: 5rem;
  color: ${props => props.theme.color.whiteDark};

  ${media.md`
    margin-top: 5rem;
  `}
`;
const Button = styled.a`
  cursor: pointer;
  border: none;
  display: flex;
  width: fit-content;
  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.black};
  padding: 0.5em 1.5em;
  margin-top: 4rem;
  margin-right: 0;
  margin-left: auto;
  border-radius: ${props => props.theme.radius};
  font-size: 1.8rem;
  font-weight: 700;

  ${media.md`
    margin-top: 6rem;
    padding: 0.7em 1.9em;
  `}
`;

const Home = () => (
  <Section background="dark" columns={2} respectHeader>
    <Cube />

    <TextWrapper>
      <Intro>{home.intro}</Intro>
      <Name>{home.title}</Name>
      <Role>{home.role}</Role>

      <Desc>{home.text}</Desc>
      <Button href="#about_me">{home.btn}</Button>
    </TextWrapper>

    <Icons />
  </Section>
);

export default Home;
