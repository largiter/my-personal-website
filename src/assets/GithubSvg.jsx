import React from 'react';

const GithubSvg = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 0C10.0625 0 0 10.0625 0 23C0 38.0938 13.6562 44.5625 15.8125 44.5625C17.25 44.5625 17.25 43.8438 17.25 43.125V39.5312C12.2188 40.9688 10.0625 38.0938 9.34375 35.9375C9.34375 35.9375 9.34375 35.2188 7.90625 33.7812C7.1875 33.0625 4.3125 31.625 7.1875 31.625C9.34375 31.625 10.7812 34.5 10.7812 34.5C12.9375 37.375 15.8125 36.6562 17.25 35.9375C17.25 34.5 18.6875 33.0625 18.6875 33.0625C12.9375 32.3438 8.625 30.1875 8.625 22.2812C8.625 19.4062 9.34375 17.25 10.7812 15.8125C10.7812 15.8125 9.34375 12.9375 10.7812 9.34375C10.7812 9.34375 14.375 9.34375 17.25 12.2188C19.4062 10.7812 26.5938 10.7812 28.75 12.2188C31.625 9.34375 35.2188 9.34375 35.2188 9.34375C36.6562 14.375 35.2188 15.8125 35.2188 15.8125C36.6562 17.25 37.375 19.4062 37.375 22.2812C37.375 30.1875 32.3438 32.3438 27.3125 33.0625C28.0312 33.7812 28.75 35.2188 28.75 37.375V43.125C28.75 43.8438 28.75 44.5625 30.1875 44.5625C32.3438 44.5625 46 38.0938 46 23C46 10.0625 35.9375 0 23 0Z"
      fill={color}
    />
  </svg>
);

export default GithubSvg;
