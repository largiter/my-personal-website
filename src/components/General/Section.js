import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import useWindowSize from './useWindowSize';
import { media } from '../../styles/media';

const Section = ({ children, background, columns, idName, respectHeader }) => {
  const windowSize = useWindowSize();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(windowSize.height);
    // debug mobile browser fixed elements
    // eslint-disable-next-line
  }, [windowSize.width]);

  return (
    <StyledSection id={idName} minHeight={windowHeight ? `${windowHeight}px` : '100vh'} background={background}>
      <Wrapper columns={columns} respectHeader={respectHeader}>
        {children}
      </Wrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  overflow: hidden;
  position: relative;
  min-height: ${props => props.minHeight};
  padding: ${props => props.theme.innerSpace};
  display: flex;
  align-items: center;
  background: ${props => (props.background === 'dark' ? props.theme.color.black : props.theme.color.white)};
`;
const isDouble = `
    grid-gap: 10rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;

    & > div:nth-child(2) {
      order: -1;
    }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  padding-top: ${props => (props.respectHeader ? 8 : 0)}rem;

  ${media.md`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;

     ${props =>
       props.columns === 2
         ? css`
             ${isDouble}
           `
         : ''}
  `}
`;

export default Section;
