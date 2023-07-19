import { projectData } from '@/utils/projectData';
import { useBoundingDimensions } from '@/utils/useBoundingDimensions';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { useMemo, useRef } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { HexPanel } from '../HexPanel';
import { SectionContainer } from '../SectionContainer';

export const ProjectsSection = () => {
  const smallCloudCardWrapperRef = useRef(null);
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');
  const { componentWidth } = useBoundingDimensions({
    componentRef: smallCloudCardWrapperRef,
  });

  const activeProjects = projectData.filter((project) => project.active);

  const projectSmallCards = useMemo(() => {
    return activeProjects.map((project, idx) => (
      <CloudCard
        key={project.name}
        sx={{
          width: componentWidth * 0.25,
          height: componentWidth * 0.25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 0.5rem',
        }}
        elevation={9}
      >
        <Typography variant="caption" fontWeight={900}>
          {project.name}
        </Typography>
      </CloudCard>
    ));
  }, [activeProjects, componentWidth]);

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
        numberOfRows={isMediumSizeScreen ? 9 : 9}
        tilesPerRow={isMediumSizeScreen ? 10 : 6}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(60deg) translateX(-10vw)',
          zIndex: 1,
        }}
      />

      <Box
        display="flex"
        flexDirection="row-reverse"
        width="100%"
        height="100%"
        textAlign="center"
      >
        <Stack ref={smallCloudCardWrapperRef} width="50%" zIndex={2}>
          <FramerFadeInWrapper>
            <Typography
              variant="body2"
              fontWeight={900}
              padding="2rem"
              sx={{
                textShadow:
                  '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
              }}
            >
              Here is a collection of web applications and projects that
              demonstrate the journey of my web development career. Each
              represents a unique challenge, skill, or milestone - from
              responsive and intuitive interfaces to seamless integrations of
              cutting-edge technologies, each project reflects my dedication to
              continuous learning and delivering high-quality solutions.
            </Typography>
          </FramerFadeInWrapper>
          <Stack
            direction="row"
            spacing={4}
            flex={1}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            {projectSmallCards}
          </Stack>
        </Stack>
      </Box>
    </SectionContainer>
  );
};
