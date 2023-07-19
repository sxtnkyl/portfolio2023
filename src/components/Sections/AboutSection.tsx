import { Stack, Typography, styled } from '@mui/material';
import { CloudCard } from '../CloudCard/CloudCard';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
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
    <Typography variant="body1" fontWeight={900}>
      Hello! My name is Kyle Sexton - a Frontend Engineer motivated by a passion
      for creating unique experiences and SaaS tools with practical, performant,
      and scalable code foundations.
    </Typography>
    <Typography variant="body1" fontWeight={900}>
      I currently reside in Atlanta, GA, and come from an atypical software
      background. I&apos;m a former geologist who found a passion for web
      development and now have a Frontend Engineering career focus with React.
    </Typography>
    <Typography variant="body1" fontWeight={900}>
      If all of this sounds good to you, reach out with the contact section
      below. Let&apos;s collaborate!
    </Typography>
  </StTextWrapper>
);

const personalInfo = (
  <StTextWrapper spacing={2}>
    <Typography variant="body1" fontWeight={900}>
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
        <FramerFadeInWrapper sx={{ zIndex: 2 }}>
          <CloudCard>{professionalInfo}</CloudCard>
        </FramerFadeInWrapper>

        <FramerFadeInWrapper sx={{ zIndex: 2 }}>
          <CloudCard sx={{ marginLeft: 'auto' }}>{personalInfo}</CloudCard>
        </FramerFadeInWrapper>

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
