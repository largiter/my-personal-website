import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { toggleMobileNav } from '../../state/actions/mNavVisibilityA';

const MenuWrapper = styled.ul``;
const MenuItem = styled.a`
  font-weight: 700;
`;

const SectionsList = ({ className, isMobile }) => {
  const dispatch = useDispatch();

  const hideMobileNav = () => {
    isMobile && dispatch(toggleMobileNav());
  };

  return (
    <MenuWrapper className={className}>
      <li>
        <MenuItem href="#about_me" onClick={hideMobileNav}>
          ABOUT ME
        </MenuItem>
        <div />
      </li>
      <li>
        <MenuItem href="#portfolio" onClick={hideMobileNav}>
          PORTFOLIO
        </MenuItem>
        <div />
      </li>
      <li>
        <MenuItem href="#contact" onClick={hideMobileNav}>
          CONTACT
        </MenuItem>
        <div />
      </li>
    </MenuWrapper>
  );
};

export default SectionsList;
