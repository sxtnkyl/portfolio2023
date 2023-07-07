import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="section"
      sx={{ scrollSnapAlign: 'center', height: '100dvh' }}
    >
      {children}
    </Box>
  );
};
