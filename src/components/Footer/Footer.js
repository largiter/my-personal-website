import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${props => props.theme.color.black};
  overflow: hidden;
  text-align: center;
  padding: 4em 0;
`;
const End = styled.p`
  color: ${props => props.theme.color.white};
  font-size: 10rem;
  font-weight: 900;
  margin-bottom: 5rem;
`;
const Text = styled.p`
  color: ${props => props.theme.color.white};
`;
const Footer = () => (
  <Wrapper>
    <End>THE END</End>
    <Text>
      Designed & Built by{' '}
      <strong>
        <a href="https://github.com/largiter">Wiktor Kocik</a>
      </strong>
    </Text>
  </Wrapper>
);

export default Footer;
