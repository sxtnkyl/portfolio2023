import useWindowDimensions from '@/utils/useWindowDimensions';
import { Box, BoxProps } from '@mui/material';

export const SectionContainer = ({ children, sx, ...rest }: BoxProps) => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });

  return (
    <Box
      component="section"
      sx={{
        scrollSnapAlign: 'center',
        height: '100dvh',
        width: '100%',
        padding: isDesktopSize ? '4rem' : '1rem',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
