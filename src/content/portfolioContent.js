import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

export const portfolioContent = {
  title: testt,
  projects: [
    {
      title: 'react native speedo',
      imgUrl: '../../images/placeholder.jpg',
      tech: 'Gatsby, Styled Components',
    },
    {
      title: 'Todo list',
      imgUrl: 'https://www.awwwards.com/awards/gallery/2015/11/be-careful-trends-awwwards-09.png',
      tech: 'React, Redux',
    },
    {
      title: 'Static website',
      imgUrl:
        'https://assets.awwwards.com/awards/media/cache/thumb_user_background_retina/avatar/751329/5cd9874d57b7c938677385.png',
      tech: 'Gatsby, Styled Components',
    },
    {
      title: 'Static website',
      imgUrl: 'https://assets.awwwards.com/awards/sites_of_the_day/2015/11/awwwards-sotd-Sons-of-Gallipoli-1.jpg',
      tech: 'Gatsby, Styled Components',
    },
  ],
};
