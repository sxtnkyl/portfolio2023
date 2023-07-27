import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Stack, Typography } from '@mui/material';

import useWindowDimensions from '@/utils/useWindowDimensions';
import { NextLinkMuiButton } from '../Buttons';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { HexPanel } from '../HexPanel';
import { SectionContainer } from '../SectionContainer';

export const IntroSection = () => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });

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
        numberOfRows={isDesktopSize ? 7 : 10}
        tilesPerRow={isDesktopSize ? 10 : 4}
        sx={{ position: 'absolute', top: 0, left: 0 }}
      />

      <Stack
        component={FramerFadeInWrapper}
        direction="row"
        spacing={1}
        padding="1rem"
        position="absolute"
        top="1.5rem"
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
          maxWidth: '90ch',
          fontWeight: 500,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textShadow:
              '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
          }}
        >
          Welcome! My name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            padding: '1rem 0',
            fontWeight: 900,
            color: '#33F1D2',
            textShadow:
              '#334A52 0px 2px 5px, #334A52 2px 0px 5px, #334A52 0px -2px 5px, #334A52 -2px 0px 5px',
          }}
        >
          Kyle Sexton.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: 'inline',
            textShadow:
              '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
          }}
        >
          I&apos;m a{' '}
        </Typography>
        <Typography variant="h4" display="inline" fontWeight={900}>
          Frontend Engineer
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: 'inline',
            textShadow:
              '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
          }}
        >
          {' '}
          who creates unique experiences and SaaS tools with practical,
          performant, and scalable code foundations.
        </Typography>
      </Box>
    </SectionContainer>
  );
};
