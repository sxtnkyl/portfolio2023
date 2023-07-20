import { ProjectData, projectData } from '@/utils/projectData';
import { useBoundingDimensions } from '@/utils/useBoundingDimensions';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { HexPanel } from '../HexPanel';
import { LargeProjectCard, SmallProjectCard } from '../ProjectComponents';
import { SectionContainer } from '../SectionContainer';

export const ProjectsSection = () => {
  const smallCloudCardWrapperRef = useRef(null);
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');
  const { componentWidth } = useBoundingDimensions({
    componentRef: smallCloudCardWrapperRef,
  });

  const activeProjects = projectData.filter((project) => project.active);

  const [selectedProject, setSelectedProject] = useState<ProjectData>();

  const projectSmallCards = useMemo(() => {
    return activeProjects.map((project) => (
      <SmallProjectCard
        key={`${project.name}-smallCard`}
        project={project}
        componentWidth={componentWidth}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        layoutId={`${project.name}`}
      />
    ));
  }, [activeProjects, componentWidth, selectedProject]);

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

      <AnimatePresence>
        <Box
          display="flex"
          flexDirection="row-reverse"
          width="100%"
          height="100%"
          textAlign="center"
          justifyContent="space-between"
        >
          <Stack
            key="textContainer"
            ref={smallCloudCardWrapperRef}
            width="50%"
            zIndex={2}
          >
            <FramerFadeInWrapper>
              <Typography
                variant="body1"
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
                cutting-edge technologies, each project reflects my dedication
                to continuous learning and delivering high-quality solutions.
              </Typography>
            </FramerFadeInWrapper>
            <Stack
              direction="row"
              spacing={2}
              flex={1}
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              {projectSmallCards}
            </Stack>
          </Stack>
          {selectedProject && <LargeProjectCard project={selectedProject} />}
        </Box>
      </AnimatePresence>
    </SectionContainer>
  );
};
