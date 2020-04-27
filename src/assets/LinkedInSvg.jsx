import React from 'react';

const LinkedInSvg = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M39.1863 39.2021H32.3826V28.5257C32.3826 25.9799 32.3294 22.7082 28.8248 22.7082C25.277 22.7082 24.7365 25.4696 24.7365 28.3374V39.2006H17.9242V17.2486H24.4677V20.2429H24.5554C25.4696 18.5136 27.6934 16.6951 31.0112 16.6951C37.9126 16.6951 39.1934 21.2391 39.1934 27.1472V39.2006L39.1863 39.2021ZM10.2278 14.2485C9.70783 14.2487 9.19292 14.1463 8.71258 13.9472C8.23224 13.7481 7.79589 13.4561 7.42855 13.0881C7.0612 12.7201 6.77007 12.2832 6.57182 11.8025C6.37358 11.3218 6.27212 10.8067 6.27325 10.2868C6.2741 9.5041 6.507 8.73928 6.94249 8.08899C7.37799 7.4387 7.99652 6.93214 8.71989 6.63336C9.44326 6.33457 10.239 6.25699 11.0064 6.4104C11.7739 6.56382 12.4786 6.94136 13.0316 7.49527C13.5845 8.04919 13.9607 8.75461 14.1127 9.52235C14.2648 10.2901 14.1857 11.0857 13.8856 11.8085C13.5855 12.5313 13.0779 13.1489 12.4268 13.5832C11.7757 14.0176 11.0105 14.2491 10.2278 14.2485V14.2485ZM13.6404 39.2021H6.81375V17.25H13.6404V39.2021ZM42.6017 0H3.3925C1.51944 0 0 1.48206 0 3.31631V42.6851C0 44.5194 1.51944 46.0014 3.3925 46.0014H42.5946C44.4648 46.0014 46 44.5194 46 42.6851V3.31631C46 1.48206 44.4648 0 42.5946 0H42.6017Z"
      fill={color}
    />
  </svg>
);

export default LinkedInSvg;