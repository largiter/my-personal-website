import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { useDispatch } from 'react-redux';
import { toggleMobileNav } from '../../state/actions/mNavVisibilityA';

const SectionsList = ({ className, isMobile }) => {
  const dispatch = useDispatch();
  const hideMobileNav = () => {
    isMobile && dispatch(toggleMobileNav());
  };

  const scrollToId = id => {
    if (!id) return;

    hideMobileNav();
    scrollTo(id);
  };
  return (
    <MenuWrapper className={className}>
      <li>
        <MenuItem onClick={() => scrollToId('#about_me')}>ABOUT ME</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('#portfolio')}>PORTFOLIO</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('#contact')}>CONTACT</MenuItem>
        <div />
      </li>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.ul``;
const MenuItem = styled.a`
  font-weight: 700;
  transition: 1s;

  &:hover {
    color: ${props => props.theme.color.white};
  }
`;

export default SectionsList;
