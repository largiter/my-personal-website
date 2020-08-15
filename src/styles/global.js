import { createGlobalStyle } from 'styled-components';
// import { media } from "./media"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
  body {
    position: relative;
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
  h1 {
  }
  h1, h2, h3, p {
    margin: 0;
  }
  h2 {
  }
  h3 {
    font-size: calc(0.5vw + 1.4em);
  }
  p, li {
    font-size: calc(0.5vw + 0.8em);
  }
  strong {
    color: ${props => props.theme.color.white};
  }
  figure {
    margin: 0;
  }
  button {
    background: initial;
    border: initial;
  }
  textarea {
    resize: vertical;
  }
  a {
    text-decoration: none;
  }
  svg, h3 {
  pointer-events: none;
  }
`;

export default GlobalStyle;
