import { useBoundingDimensions } from '@/utils/useBoundingDimensions';
import { Stack } from '@mui/material';
import { useMemo, useRef } from 'react';
import { HexRow } from './HexRow';

export const HexPanel = ({
  numberOfRows = 12,
  tilesPerRow = 12,
}: {
  numberOfRows: number;
  tilesPerRow: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { componentWidth } = useBoundingDimensions({ componentRef: ref });
  /**
   * margin spacing ensures an extra tile
   * doesn't get pushed under on window resize
   */
  const tileSize = useMemo(() => {
    const marginSpacing = 3 * (tilesPerRow + 1);
    return (componentWidth - marginSpacing) / tilesPerRow;
  }, [componentWidth, tilesPerRow]);

  return (
    <Stack
      ref={ref}
      sx={{ width: '100%', margin: '0 auto', justifyContent: 'center' }}
    >
      {Array.from({ length: numberOfRows }).map((_, i) => {
        return (
          <HexRow
            key={i}
            row={i}
            tileSize={tileSize}
            tilesPerRow={tilesPerRow}
          />
        );
      })}
    </Stack>
  );
};
