import { useMediaQuery } from '@mui/material';
import { HexPanel } from '../HexPanel';
import { SectionContainer } from '../SectionContainer';

export const IntroSection = () => {
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');

  return (
    <SectionContainer>
      <HexPanel
        numberOfRows={isMediumSizeScreen ? 7 : 9}
        tilesPerRow={isMediumSizeScreen ? 10 : 6}
      />
    </SectionContainer>
  );
};
