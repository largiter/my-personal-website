import React from 'react';

import styled from 'styled-components';

const Icon = styled.div`
  z-index: 999;
  color: ${props => props.color};
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = ({ color, className }) => (
  <Icon className={className} color={color}>
    WK
  </Icon>
);

export default Logo;
