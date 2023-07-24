import { Box, BoxProps, useMediaQuery } from '@mui/material';

export const SectionContainer = ({ children, sx, ...rest }: BoxProps) => {
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');

  return (
    <Box
      component="section"
      sx={{
        scrollSnapAlign: 'center',
        height: '100dvh',
        width: '100%',
        padding: isMediumSizeScreen ? '4rem' : '1rem',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
