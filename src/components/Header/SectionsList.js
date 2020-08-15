import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
<<<<<<< HEAD

    hideMobileNav();
    scrollTo(id);
=======
    const destination = document.getElementById(id);

    hideMobileNav();
    destination && destination.scrollIntoView({ behavior: 'smooth' });
>>>>>>> de2711bfc6ca794d97b94adc437fa7e444c4e6f3
  };

  return (
    <MenuWrapper ref={menuWrapperRef} className={className}>
      <li>
<<<<<<< HEAD
        <MenuItem onClick={() => scrollToId('#about_me')}>ABOUT ME</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('#portfolio')}>PORTFOLIO</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('#contact')}>CONTACT</MenuItem>
=======
        <MenuItem onClick={() => scrollToId('about_me')}>ABOUT ME</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('portfolio')}>PORTFOLIO</MenuItem>
        <div />
      </li>
      <li>
        <MenuItem onClick={() => scrollToId('contact')}>CONTACT</MenuItem>
>>>>>>> de2711bfc6ca794d97b94adc437fa7e444c4e6f3
        <div />
      </li>
    </MenuWrapper>
  );
};
export default SectionsList;
