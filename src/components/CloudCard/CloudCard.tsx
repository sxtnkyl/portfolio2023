import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { Card, CardProps } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CloudCardProps extends CardProps {
  children: ReactNode;
}

export const CloudCard = ({
  children,
  sx,
  ...rest
}: CloudCardProps & MotionProps) => {
  return (
    <Card
      component={motion.div}
      elevation={3}
      sx={{
        position: 'relative',
        backgroundColor: convertHexToRgbOpacity({
          hex: '#fafafa',
          opacity: '0.2',
        }),
        backdropFilter: 'blur(20px)',
        width: '50vw',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};
