import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';
import { social } from '../../content/content';

import GithubSvg from '../../assets/GithubSvg';
import LinkedinSvg from '../../assets/LinkedinSvg';
import useWindowSize from '../General/useWindowSize';

const Icons = () => {
  const [iconSize, setIconSize] = useState(40);
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    windowWidth > 1000 ? setIconSize(70) : setIconSize(40);
  }, [windowWidth]);

  return (
    <SocialWrapper iconSize={iconSize}>
      <SocialIcon href={`https://${social.github}`}>
        <GithubSvg size={iconSize} color="#FCFCFC" />
      </SocialIcon>
      <SocialIcon href={`https://${social.linkedIn}`}>
        <LinkedinSvg size={iconSize} color="#FCFCFC" />
      </SocialIcon>
    </SocialWrapper>
  );
};

const SocialWrapper = styled.div`
  position: absolute;
  bottom: ${props => props.theme.innerSpace};
  left: ${props => props.theme.innerSpace};
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(2, ${props => props.iconSize}px);

  ${media.md`
    left: initial;
    right: ${props => props.theme.innerSpace};
  `}
`;
const SocialIcon = styled.a`
  transition: 0.2s;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export default Icons;
