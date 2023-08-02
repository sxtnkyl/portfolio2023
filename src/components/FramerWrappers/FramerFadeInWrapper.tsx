import { Box, BoxProps } from '@mui/material';
import { MotionProps, motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FramerFadeInWrapperProps extends BoxProps {
  children: ReactNode;
}

export const FramerFadeInWrapper = ({
  children,
  ...rest
}: FramerFadeInWrapperProps & MotionProps) => {
  const fadeInWrapperRef = useRef(null);
  const isInView = useInView(fadeInWrapperRef, { once: true, amount: 0.9 });

  return (
    <Box
      ref={fadeInWrapperRef}
      component={motion.div}
      initial={false}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      {...rest}
    >
      {children}
    </Box>
  );
};
