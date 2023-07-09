import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { MutableRefObject } from 'react';

export const useFramerBackgroundAnimation = ({
  ref,
}: {
  ref: MutableRefObject<null>;
}): { background: MotionValue<string> } => {
  const { scrollYProgress } = useScroll({ container: ref });

  const yRange = [0, 0.5, 1];
  const gradientArr = [
    `linear-gradient(0deg, #14D8FF 0%, #fafafa 100%)`,
    `linear-gradient(45deg, #00E6EF 0%, #E3FEFF 100%)`,
    `linear-gradient(90deg, #00E6EF 0%, #33F1D2 100%)`,
  ];
  const background = useTransform(scrollYProgress, yRange, gradientArr);

  return { background };
};
