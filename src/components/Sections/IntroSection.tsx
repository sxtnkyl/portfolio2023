import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import { NextLinkMuiButton } from '../Buttons';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { HexPanel } from '../HexPanel';
import { SectionContainer } from '../SectionContainer';

export const IntroSection = () => {
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');

  return (
    <SectionContainer
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HexPanel
        numberOfRows={isMediumSizeScreen ? 7 : 9}
        tilesPerRow={isMediumSizeScreen ? 10 : 6}
        sx={{ position: 'absolute', top: 0, left: 0 }}
      />

      <Stack
        component={FramerFadeInWrapper}
        direction="row"
        spacing={1}
        padding="1rem"
        position="absolute"
        top={0}
        right={0}
        zIndex={2}
        display="flex"
      >
        <NextLinkMuiButton
          aria-label="link to resume"
          href={'/Kyle_Sexton_Resume_June2023.pdf'}
        >
          <Typography variant="button">resume</Typography>
        </NextLinkMuiButton>
        <NextLinkMuiButton
          aria-label="link to linkedin"
          href="https://www.linkedin.com/in/ksexton91/"
        >
          <LinkedInIcon />
        </NextLinkMuiButton>
        <NextLinkMuiButton
          aria-label="link to github"
          href="https://github.com/sxtnkyl"
        >
          <GitHubIcon />
        </NextLinkMuiButton>
      </Stack>

      <Box
        component={FramerFadeInWrapper}
        sx={{
          zIndex: 2,
          textAlign: 'center',
          textShadow:
            '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            color: '#334A52',
            letterSpacing: '0.25rem',
          }}
        >
          Kyle Sexton
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          sx={{
            fontWeight: 900,
            color: '#33F1D2',
            marginRight: '0.75ch',
            textShadow:
              '#334A52 0px 2px 5px, #334A52 2px 0px 5px, #334A52 0px -2px 5px, #334A52 -2px 0px 5px',
          }}
        >
          Frontend
        </Typography>
        <Typography
          variant="h2"
          display="inline"
          sx={{
            fontWeight: 900,
            color: '#33F1D2',
            textShadow:
              '#334A52 0px 2px 5px, #334A52 2px 0px 5px, #334A52 0px -2px 5px, #334A52 -2px 0px 5px',
            letterSpacing: '0.25rem',
          }}
        >
          Engineer.
        </Typography>
      </Box>
    </SectionContainer>
  );
};
