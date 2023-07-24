import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * @prop tileSize: px value
 */
interface HexRowProps {
  row: number;
  tileSize: number;
  tilesPerRow: number;
}

/**
 * marginLeft offsets to top and bottom hex points (half width)
 * plus half of the individual tile marginLeft offset
 */
export const HexRow = ({ row, tileSize, tilesPerRow }: HexRowProps) => {
  const adjustedRowLength = useMemo(() => {
    return row % 2 === 0 ? tilesPerRow : tilesPerRow - 1;
  }, [row, tilesPerRow]);

  return (
    <Box
      sx={{
        clear: 'left',
        ':nth-of-type(even)': {
          marginLeft: `${tileSize / 2 + 1.5}px`,
        },
      }}
    >
      {Array.from({ length: adjustedRowLength }).map((_, i) => {
        return <HexTile key={i} tileSize={tileSize} />;
      })}
    </Box>
  );
};

/**
 * top and bot triangle split into two
 */
const HexTile = ({ tileSize }: { tileSize: number }) => {
  const color = '#fafafa';

  return (
    <Box
      component={motion.div}
      sx={{
        float: 'left',
        marginLeft: '3px',
        marginBottom: `calc(${tileSize / 2}px / -2)`,
        opacity: 0,
      }}
      animate={{ opacity: Math.random() * (0.6 - 0.1) + 0.1 }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: Math.random() * 2 + 1,
      }}
      whileHover={{ opacity: 0.8, transition: { duration: 0.5 } }}
    >
      {/* top triangle */}
      <Box
        sx={{
          width: 0,
          borderBottom: `calc(${tileSize}px / (2 * tan(60deg))) solid #fafafa`,
          borderLeft: `${tileSize / 2}px solid transparent`,
          borderRight: `${tileSize / 2}px solid transparent`,
        }}
        style={{ borderBottomColor: color }}
      />
      {/* central box */}
      <Box
        sx={{
          width: tileSize,
          height: `calc(${tileSize}px * tan(30deg))`,
          background: '#fafafa',
        }}
        style={{ backgroundColor: color }}
      />
      {/* bottom triangle */}
      <Box
        sx={{
          width: 0,
          borderTop: `calc(${tileSize}px / (2 * tan(60deg))) solid #fafafa`,
          borderLeft: `${tileSize / 2}px solid transparent`,
          borderRight: `${tileSize / 2}px solid transparent`,
        }}
        style={{ borderTopColor: color }}
      />
    </Box>
  );
};
