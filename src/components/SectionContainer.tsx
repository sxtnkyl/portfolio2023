import { Box, BoxProps } from '@mui/material';

export const SectionContainer = ({ children, sx, ...rest }: BoxProps) => {
  return (
    <Box
      component="section"
      sx={{ scrollSnapAlign: 'center', height: '100dvh', ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
};
