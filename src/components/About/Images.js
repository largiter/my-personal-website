import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { media } from '../../styles/media';
import useWindowSize from '../General/useWindowSize';

const AllImagesWrapper = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  ${media.md`
    margin-top: 0;
  `}
`;
const ImageWrapper = styled.div`
  position: relative;
  height: ${props => props.height};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsla(184, 52%, 52%, 0.3);
  }
`;

const Images = () => {
  const images = useStaticQuery(graphql`
    fragment aboutImage on File {
      childImageSharp {
        fluid(maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      image1: file(relativePath: { eq: "my-pic.jpg" }) {
        ...aboutImage
      }
    }
  `);

  const imagesWrapper = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  const windowWidth = useWindowSize().width;

  useEffect(() => {
    const [image] = imagesWrapper.current.children;
    setImageHeight(image.offsetWidth);
  }, [windowWidth]);

  return (
    <AllImagesWrapper ref={imagesWrapper}>
      {[...Array(4)].map((_, index) => (
        <ImageWrapper key={index} height={imageHeight}>
          <Img objectFit="cover" fluid={images.image1.childImageSharp.fluid} />
        </ImageWrapper>
      ))}
    </AllImagesWrapper>
  );
};

export default Images;
