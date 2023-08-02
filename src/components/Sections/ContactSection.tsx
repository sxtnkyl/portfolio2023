import useWindowDimensions from '@/utils/useWindowDimensions';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';
import { ContactForm } from '../ContactForm';
import { MaxContainer, SectionContainer } from '../Containers';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { FloatingHexTile } from '../HexPanel/FloatingHexTile';

export const ContactSection = () => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });

  const floatingHexPositions = useMemo(
    () => ({
      hex1: {
        tileSize: isDesktopSize ? 200 : 125,
        position: {
          right: isDesktopSize ? '30%' : '40%',
          bottom: isDesktopSize ? '60%' : '18%',
          zIndex: 3,
        },
      },
      hex2: {
        tileSize: isDesktopSize ? 250 : 225,
        position: {
          right: isDesktopSize ? '20%' : '30%',
          bottom: isDesktopSize ? '50%' : '70%',
          zIndex: isDesktopSize ? 3 : 1,
        },
      },
      hex3: {
        tileSize: isDesktopSize ? 250 : 175,
        position: {
          left: isDesktopSize ? '40%' : '0%',
          bottom: isDesktopSize ? '50%' : '90%',
          zIndex: 1,
        },
      },
    }),
    [isDesktopSize]
  );

  return (
    <SectionContainer
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <MaxContainer
        component={FramerFadeInWrapper}
        sx={{
          ...(!isDesktopSize && { display: 'inline' }),
        }}
      >
        <CloudCard
          sx={{
            height: '100%',
            width: isDesktopSize ? '50%' : '100%',
            zIndex: 2,
            padding: '4rem',
            textAlign: 'center',
          }}
        >
          <ContactForm />
        </CloudCard>

        <Box sx={{ width: '50%' }}>
          <FloatingHexTile
            tileSize={floatingHexPositions.hex1.tileSize}
            sx={{ ...floatingHexPositions.hex1.position }}
          />
          <FloatingHexTile
            tileSize={floatingHexPositions.hex2.tileSize}
            sx={{ ...floatingHexPositions.hex2.position }}
          />
          <FloatingHexTile
            tileSize={floatingHexPositions.hex3.tileSize}
            sx={{ ...floatingHexPositions.hex3.position }}
          />
        </Box>
      </MaxContainer>
    </SectionContainer>
  );
};
