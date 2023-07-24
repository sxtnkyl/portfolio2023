import { Box, SxProps } from '@mui/material';
import { motion } from 'framer-motion';

export interface FloatingHexTileProps {
  tileSize: number;
  sx?: SxProps;
  layoutId?: string;
}

export const FloatingHexTile = ({
  tileSize,
  sx,
  layoutId,
}: FloatingHexTileProps) => {
  const color = '#fafafa';

  const shadowSize = 5;
  const shadowColor = '#4F9BB0';

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'absolute',
        ...sx,
      }}
      layoutId={layoutId ?? ''}
    >
      <Box
        component={motion.div}
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: Math.random() * 2,
        }}
        sx={{ position: 'relative', isolation: 'isolate' }}
      >
        {/* top-triangle */}
        <Box
          sx={{
            width: 0,
            borderBottom: `calc(${tileSize}px / (2 * tan(60deg))) solid #fafafa`,
            borderLeft: `${tileSize / 2}px solid transparent`,
            borderRight: `${tileSize / 2}px solid transparent`,
            zIndex: 2,
            position: 'absolute',
            top: 1,
            left: 0,
            borderBottomColor: color,
          }}
        />
        {/* central-box */}
        <Box
          sx={{
            width: tileSize,
            height: `calc(${tileSize}px * tan(30deg))`,
            background: '#fafafa',
            zIndex: 2,
            position: 'absolute',
            top: `calc(${tileSize}px / (2 * tan(60deg)))`,
            left: 0,
            backgroundColor: color,
          }}
        />
        {/* bottom-triangle */}
        <Box
          sx={{
            width: 0,
            borderTop: `calc(${tileSize}px / (2 * tan(60deg))) solid #fafafa`,
            borderLeft: `${tileSize / 2}px solid transparent`,
            borderRight: `${tileSize / 2}px solid transparent`,
            zIndex: 2,
            position: 'absolute',
            top: `calc(${tileSize}px / (2 * tan(60deg)) + (${
              tileSize - 1.5
            }px * tan(30deg)))`,
            left: 0,
            borderTopColor: color,
          }}
        />

        {/* central-box-shadow */}
        <Box
          sx={{
            width: tileSize,
            height: `calc(${tileSize}px * tan(30deg))`,
            background: shadowColor,
            zIndex: 1,
            position: 'absolute',
            top: `calc(${tileSize}px / (2 * tan(60deg)) + ${shadowSize}px)`,
            left: `${shadowSize}px`,
          }}
          style={{ backgroundColor: shadowColor, filter: 'blur(5px)' }}
        />
        {/* bottom-triangle-shadow */}
        <Box
          sx={{
            width: 0,
            borderTop: `calc(${tileSize}px / (2 * tan(60deg))) solid ${shadowColor}`,
            borderLeft: `${tileSize / 2}px solid transparent`,
            borderRight: `${tileSize / 2}px solid transparent`,
            zIndex: 1,
            position: 'absolute',
            top: `calc(${tileSize}px / (2 * tan(60deg)) + (${tileSize}px * tan(30deg)) + ${shadowSize}px)`,
            left: `${shadowSize}px`,
          }}
          style={{ borderTopColor: shadowColor, filter: 'blur(5px)' }}
        />
      </Box>
    </Box>
  );
};
