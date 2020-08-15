import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: undefined, y: undefined, target: undefined });

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.pageX, y: e.pageY, target: e.target });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePosition;
