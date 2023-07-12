import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { Card, CardProps } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CloudCardProps extends CardProps {
  cardContent: ReactNode;
}

export const CloudCard = ({ cardContent, sx, ...rest }: CloudCardProps) => {
  return (
    <Card
      component={motion.div}
      elevation={5}
      sx={{
        position: 'relative',
        backgroundColor: convertHexToRgbOpacity({
          hex: '#fafafa',
          opacity: '0.2',
        }),
        backdropFilter: 'blur(20px)',
        width: '50vw',
        minHeight: '30vh',
        ...sx,
      }}
      {...rest}
    >
      {cardContent}
    </Card>
  );
};