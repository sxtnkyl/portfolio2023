import { Stack, Typography, styled } from '@mui/material';
import { CloudCard } from '../CloudCard/CloudCard';
import { FloatingHexTile } from '../HexPanel/FloatingHexTile';
import { SectionContainer } from '../SectionContainer';

const StTextWrapper = styled(Stack)`
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const professionalInfo = (
  <StTextWrapper spacing={2}>
    <Typography variant="subtitle2">
      I work with React and Typescript to build scalable, maintainable, and
      intelligible applications. I enjoy leveraging Nextjs, Material-UI, and AWS
      services to create practical, performant, and seamless applications.
    </Typography>
    <Typography variant="subtitle2">
      Having worked as a Geologist in the past, I utilized my expertise to
      address environmental risks. Presently, I leverage this background in
      engineering consulting to effectively collaborate and coordinate intricate
      SaaS functionalities.
    </Typography>
    <Typography variant="subtitle2">
      If all of this sounds good to you, reach out with the contact section
      below. Let&apos;s collaborate!
    </Typography>
  </StTextWrapper>
);

const personalInfo = (
  <StTextWrapper spacing={1}>
    <Typography variant="subtitle2">
      Outside of work hours my non-professional passions include over a decade
      of rock climbing and beach volleyball. My love for these sports can be
      summarized in that both require an analytical approach, and require one to
      be flexible with on-the-fly adjustments in competitive settings. Not to
      mention they require sandy beaches or scenic mountains!
    </Typography>
  </StTextWrapper>
);

export const AboutSection = () => {
  return (
    <SectionContainer>
      <Stack
        height="100%"
        width="100%"
        justifyContent="space-evenly"
        position="relative"
        sx={{ isolation: 'isolate' }}
      >
        <CloudCard cardContent={professionalInfo} sx={{ zIndex: 2 }} />
        <CloudCard
          cardContent={personalInfo}
          sx={{ alignSelf: 'flex-end', zIndex: 2 }}
        />
        <FloatingHexTile
          tileSize={225}
          sx={{ right: '30%', top: '-15%', zIndex: 1 }}
        />
        <FloatingHexTile
          tileSize={250}
          sx={{ left: '5%', top: '40%', zIndex: 1 }}
        />
        <FloatingHexTile
          tileSize={200}
          sx={{ right: '15%', bottom: '20%', zIndex: 1 }}
        />
      </Stack>
    </SectionContainer>
  );
};
