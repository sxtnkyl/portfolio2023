import { ProjectData, projectData } from '@/utils/projectData';
import { useBoundingDimensions } from '@/utils/useBoundingDimensions';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { HexPanel } from '../HexPanel';
import { LargeProjectCard, SmallProjectCard } from '../ProjectComponents';
import { SectionContainer } from '../SectionContainer';

const paragraphVariants = {
  initial: { height: 'auto', opacity: 1 },
  animate: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const ProjectsSection = () => {
  const smallCloudCardWrapperRef = useRef(null);
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');
  const { componentWidth } = useBoundingDimensions({
    componentRef: smallCloudCardWrapperRef,
  });

  const responsiveWidthSize = useMemo(() => {
    return isMediumSizeScreen ? '50%' : '100%';
  }, [isMediumSizeScreen]);

  const activeProjects = projectData.filter((project) => project.active);

  const [selectedProject, setSelectedProject] = useState<ProjectData>();
  useEffect(() => {
    setSelectedProject(isMediumSizeScreen ? activeProjects[0] : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMediumSizeScreen]);

  const isSmallScreenAndNoSelectedProject = useMemo(() => {
    return !isMediumSizeScreen && selectedProject;
  }, [isMediumSizeScreen, selectedProject]);

  const projectSmallCards = useMemo(() => {
    return activeProjects.map((project) => (
      <SmallProjectCard
        key={`${project.name}-smallCard`}
        project={project}
        cardDimensions={{
          height: isSmallScreenAndNoSelectedProject
            ? '90%'
            : componentWidth * 0.3,
          width: isSmallScreenAndNoSelectedProject
            ? '90%'
            : componentWidth * 0.3,
        }}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        layoutId={`${project.name}`}
      />
    ));
  }, [
    activeProjects,
    componentWidth,
    isSmallScreenAndNoSelectedProject,
    selectedProject,
  ]);

  const shouldDisplayProjectParagraph = useMemo(() => {
    return isMediumSizeScreen || !selectedProject;
  }, [isMediumSizeScreen, selectedProject]);

  return (
    <SectionContainer
      sx={{
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        flexDirection: isMediumSizeScreen ? 'row-reverse' : 'column',
      }}
    >
      <HexPanel
        numberOfRows={isMediumSizeScreen ? 7 : 10}
        tilesPerRow={isMediumSizeScreen ? 10 : 4}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: isMediumSizeScreen
            ? 'rotate(60deg) translateX(-10vw)'
            : 'rotate(30deg) translateX(-30vw) translateY(-20vw)',
          zIndex: 1,
        }}
      />

      <AnimatePresence>
        <Stack
          key="textAndSmallCardsContainer"
          component={motion.div}
          ref={smallCloudCardWrapperRef}
          spacing={isMediumSizeScreen ? 4 : 2}
          sx={{
            zIndex: 2,
            width: responsiveWidthSize,
            height: isMediumSizeScreen ? '100%' : 'auto',
            padding: isMediumSizeScreen ? ' 0 1rem' : '1rem 0',
          }}
        >
          <Box
            component={motion.div}
            variants={paragraphVariants}
            initial="initial"
            animate={shouldDisplayProjectParagraph ? 'initial' : 'animate'}
          >
            <Typography
              key="projectsParagraph"
              component={FramerFadeInWrapper}
              variant="h6"
              sx={{
                fontWeight: 900,
                textShadow:
                  '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
              }}
            >
              The following collection of web applications and projects
              demonstrate the journey of my web development career. Each
              represents a unique challenge, skill, or milestone - from
              responsive and intuitive interfaces to integration of modern
              tooling and libraries, reflecting my dedication to continuous
              learning and delivering high-quality solutions.
            </Typography>
          </Box>
          <Stack
            component={motion.div}
            direction="row"
            flexWrap="wrap"
            flex={isMediumSizeScreen ? 1 : 0}
          >
            {projectSmallCards}
          </Stack>
        </Stack>
        {selectedProject && (
          <LargeProjectCard
            project={selectedProject}
            sx={{ width: isMediumSizeScreen ? 'auto' : '100%' }}
          />
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};
