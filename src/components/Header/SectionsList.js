import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { toggleMobileNav } from '../../state/actions/mNavVisibilityA';

const MenuWrapper = styled.ul``;
const MenuItem = styled.a`
  font-weight: 700;
  transition: 1s;

  &:hover {
    color: ${props => props.theme.color.white};
  }
`;

const SectionsList = ({ className, isMobile }) => {
  const dispatch = useDispatch();
  const menuWrapperRef = useRef(null);

  const hideMobileNav = () => {
    isMobile && dispatch(toggleMobileNav());
  };

  const scrollToId = id => {
    if (!id) return;
    const destination = document.getElementById(id);

    hideMobileNav();
    destination && destination.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MenuWrapper ref={menuWrapperRef} className={className}>
      <li>
        <MenuItem onClick={() => scrollToId('about_me')}>ABOUT ME</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('portfolio')}>PORTFOLIO</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('contact')}>CONTACT</MenuItem>
        <div />
      </li>
    </MenuWrapper>
  );
};
export default SectionsList;
