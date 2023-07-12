import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface FramerFadeInWrapperProps extends BoxProps {
  children: ReactNode;
}

export const FramerFadeInWrapper = ({
  children,
  ...rest
}: FramerFadeInWrapperProps) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <Box
      component={motion.div}
      initial={false}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      {...rest}
    >
      {children}
    </Box>
  );
};
