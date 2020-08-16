import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { media } from '../../styles/media';

const Button = ({ children, scrollId, isDark }) => (
  <StyledButton isDark={isDark} onClick={() => scrollId && scrollTo(scrollId)}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  position: relative;
  z-index: 10;
  cursor: pointer;
  border: none;
  display: flex;
  width: fit-content;
  color: ${props => props.theme.color.black};
  padding: 0.5em 1.5em;
  margin-top: 4rem;
  margin-right: 0;
  margin-left: auto;
  font-size: 1.8rem;
  font-weight: 700;
  border-radius: ${props => props.theme.radius};

  &:hover {
    &::after {
      transform: translate(0.5rem, 0.5rem);
    }
  }

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
  }

  &::before {
    z-index: -1;
    background: ${props => props.theme.color.blue};
  }

  &::after {
    z-index: -2;
    background: ${props => (props.isDark ? props.theme.color.black : props.theme.color.white)};
    transition: 0.2s;
  }

  ${media.md`
    margin-top: 6rem;
    padding: 0.7em 1.9em;
  `}
`;

export default Button;
