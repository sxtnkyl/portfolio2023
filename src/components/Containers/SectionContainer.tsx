import { Box, BoxProps } from '@mui/material';

export const SectionContainer = ({ children, sx, ...rest }: BoxProps) => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        scrollSnapAlign: 'center',
        height: '100dvh',
        width: '100%',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
