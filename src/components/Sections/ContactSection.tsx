import { Box } from '@mui/material';
import { CloudCard } from '../CloudCard/CloudCard';
import { ContactForm } from '../ContactForm';
import { FloatingHexTile } from '../HexPanel/FloatingHexTile';
import { SectionContainer } from '../SectionContainer';

export const ContactSection = () => {
  return (
    <SectionContainer
      sx={{
        position: 'relative',
      }}
    >
      <CloudCard
        sx={{
          height: '100%',
          width: '50%',
          zIndex: 2,
          padding: '4rem',
          textAlign: 'center',
        }}
      >
        <ContactForm />
      </CloudCard>
      <Box sx={{ width: '50%' }}>
        <FloatingHexTile
          tileSize={200}
          sx={{ right: '30%', bottom: '60%', zIndex: 3 }}
        />
        <FloatingHexTile
          tileSize={250}
          sx={{ right: '20%', bottom: '50%', zIndex: 3 }}
        />
      </Box>
      <FloatingHexTile
        tileSize={250}
        sx={{ left: '40%', bottom: '50%', zIndex: 1 }}
      />
    </SectionContainer>
  );
};
