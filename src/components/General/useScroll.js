import { useState, useEffect } from 'react';

const useScroll = () => {
  const isClient = typeof window === 'object';

  const [scroll, setScroll] = useState({
    y: isClient ? window.pageYOffset : undefined,
    direction: '',
  });

  const listener = () => {
    setScroll(prev => ({
      y: window.pageYOffset,
      direction: prev.y > window.pageYOffset ? 'up' : 'down',
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export default useScroll;
