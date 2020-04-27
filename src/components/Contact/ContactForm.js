import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';

const Form = styled.form``;
const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  padding: 1em;
  border: 1px solid ${props => props.theme.color.blue};
`;
const TextArea = styled.textarea`
  padding: 1em;
  border: 1px solid ${props => props.theme.color.blue};
  min-height: 15rem;
`;
const Submit = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  width: fit-content;
  background: ${props => props.theme.color.blue};
  padding: 0.3em 1.5em;
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

const ContactForm = () => (
  <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <Label>
      Email
      <Input type="email" name="email" id="email" />
    </Label>
    <Label>
      Subject
      <Input type="text" name="subject" id="subject" />
    </Label>
    <Label>
      Message
      <TextArea name="message" id="message" rows="5" />
    </Label>
    <Submit type="submit">Send</Submit>
  </Form>
);

export default ContactForm;
