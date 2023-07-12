import { Box, BoxProps } from '@mui/material';

export const SectionContainer = ({ children, sx, ...rest }: BoxProps) => {
  return (
    <Box
      component="section"
      sx={{
        scrollSnapAlign: 'center',
        height: '100dvh',
        width: '100%',
        padding: '4rem',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
