import React from 'react';
import styled from 'styled-components';

import SectionsList from './SectionsList';

const MenuList = styled(SectionsList)`
  width: fit-content;
  margin: 0 0 0 auto;
  list-style-type: none;

  & > li {
    cursor: pointer;
    display: inline-flex;
    margin-left: 3em;
  }

  a {
    color: ${props => props.theme.color.blue};
    font-size: 2.5rem;
  }
`;

const DesktopNav = () => <MenuList />;

export default DesktopNav;
