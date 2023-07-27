import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: boolean;
  height: boolean;
};

/**
 * Better media query due to nextjs SSR
 * not having access to window object
 * @returns true for window larger than params
 */
const useWindowDimensions = ({
  breakWidth,
  breakHeight,
}: {
  breakWidth?: number;
  breakHeight?: number;
}): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: false,
    height: false,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth > (breakWidth || 0),
        height: window.innerHeight > (breakHeight || 0),
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default useWindowDimensions;
