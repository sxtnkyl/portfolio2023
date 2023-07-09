import { HexPanel } from '../HexPanel';
import { SectionContainer } from '../SectionContainer';

export const IntroSection = () => {
  return (
    <SectionContainer>
      <HexPanel numberOfRows={7} tilesPerRow={10} />
    </SectionContainer>
  );
};
