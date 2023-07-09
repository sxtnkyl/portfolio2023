import { MutableRefObject, useEffect, useState } from 'react';

interface BoundingDimensions {
  componentWidth: number;
}
export const useBoundingDimensions = ({
  componentRef,
}: {
  componentRef: MutableRefObject<HTMLElement | null>;
}): BoundingDimensions => {
  const [componentWidth, setComponentWidth] = useState(0);

  useEffect(() => {
    const updateComponentWidth = () => {
      if (componentRef?.current) {
        const width = componentRef.current.offsetWidth;
        setComponentWidth(width);
      }
    };

    updateComponentWidth(); // Initial width update
    window.addEventListener('resize', updateComponentWidth); // Update width on window resize

    return () => {
      window.removeEventListener('resize', updateComponentWidth); // Clean up event listener on unmount
    };
  }, [componentRef]);

  return { componentWidth };
};
