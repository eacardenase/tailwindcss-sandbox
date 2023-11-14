'use client';

import { useState, useEffect } from 'react';

const Customization = () => {
  const size = useWindowSize();

  return <h1 className='text-xl text-white'>Width: {size.width}</h1>;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default Customization;
