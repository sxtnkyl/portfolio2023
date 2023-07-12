import { useBoundingDimensions } from '@/utils/useBoundingDimensions';
import { Stack, StackProps } from '@mui/material';
import { useMemo, useRef } from 'react';
import { HexRow } from './HexRow';

interface HexPanel extends StackProps {
  numberOfRows: number;
  tilesPerRow: number;
}

export const HexPanel = ({
  numberOfRows = 12,
  tilesPerRow = 12,
  sx,
  ...rest
}: HexPanel) => {
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
      sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', ...sx }}
      {...rest}
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
