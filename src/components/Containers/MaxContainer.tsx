import useWindowDimensions from '@/utils/useWindowDimensions';
import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface MaxContainerProps extends BoxProps {
  children: ReactNode;
}

export const MaxContainer = ({ sx, children, ...rest }: MaxContainerProps) => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });
  const { width: isLargeDesktopSizeWidth, height: isLargeDesktopSizeHeight } =
    useWindowDimensions({ breakHeight: 800, breakWidth: 1280 });

  return (
    <Box
      sx={{
        position: 'relative',
        height: isLargeDesktopSizeHeight ? '50rem' : '100%',
        width: isLargeDesktopSizeWidth ? '80rem' : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isDesktopSize ? '4rem' : '1rem',
        textAlign: 'center',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
