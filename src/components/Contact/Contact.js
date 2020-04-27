import React, { useRef } from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';

import Section from '../General/Section';
import GithubSvg from '../../assets/GithubSvg';
import LinkedInSvg from '../../assets/LinkedInSvg';
import ContactForm from './ContactForm';

import { contact, social } from '../../content/content';

const Col1 = styled.div`
  ${media.md`
    order: -1;
  `}
`;
const Col2 = styled.div``;
const Title = styled.h2`
  margin-bottom: 5rem;
  font-size: calc(0.5vw + 3em);
`;

const SocialWrapper = styled.div`
  margin-bottom: 7rem;
`;
const SocialIcon = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2em;
`;
const SocialText = styled.h3`
  color: ${props => props.theme.color.blue};
  margin-left: 1em;
  font-size: calc(0.5vw + 0.9em);
`;

const Contact = () => (
  <Section idName="contact" columns={2}>
    <Col1>
      <Title>{contact.title}</Title>

      <ContactForm />
    </Col1>

    <Col2>
      <SocialWrapper>
        <SocialIcon href={`https://${social.github}`}>
          <GithubSvg size={70} color="hsl(184, 52%, 52%)" />
          <SocialText>{social.github}</SocialText>
        </SocialIcon>
        <SocialIcon href={`https://${social.linkedin}`}>
          <LinkedInSvg size={70} color="hsl(184, 52%, 52%)" />
          <SocialText>{social.linkedIn}</SocialText>
        </SocialIcon>
      </SocialWrapper>
    </Col2>
  </Section>
);

export default Contact;
