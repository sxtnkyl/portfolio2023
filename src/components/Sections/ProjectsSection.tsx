import { ProjectData, projectData } from '@/utils/projectData';
import useWindowDimensions from '@/utils/useWindowDimensions';
import { Box, Grid, Stack, Typography } from '@mui/material';
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
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });

  const activeProjects = projectData.filter((project) => project.active);
  const [selectedProject, setSelectedProject] = useState<ProjectData>();
  useEffect(() => {
    setSelectedProject(isDesktopSize ? activeProjects[0] : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktopSize]);

  const responsiveWidthSize = useMemo(() => {
    return isDesktopSize ? '50%' : '100%';
  }, [isDesktopSize]);

  const projectSmallCards = useMemo(() => {
    return activeProjects.map((project) => (
      <SmallProjectCard
        key={`${project.name}-smallCard`}
        project={project}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        layoutId={`${project.name}`}
      />
    ));
  }, [activeProjects, selectedProject]);

  const shouldDisplayProjectParagraph = useMemo(() => {
    return isDesktopSize || !selectedProject;
  }, [isDesktopSize, selectedProject]);

  return (
    <SectionContainer
      sx={{
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        flexDirection: isDesktopSize ? 'row-reverse' : 'column',
      }}
    >
      <HexPanel
        numberOfRows={isDesktopSize ? 7 : 10}
        tilesPerRow={isDesktopSize ? 10 : 4}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: isDesktopSize
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
          spacing={isDesktopSize ? 4 : 2}
          sx={{
            zIndex: 2,
            width: responsiveWidthSize,
            height: isDesktopSize ? '100%' : 'auto',
            padding: isDesktopSize ? ' 0 1rem' : '1rem 0',
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
          <Grid container component={motion.div} flex={isDesktopSize ? 1 : 0}>
            {projectSmallCards}
          </Grid>
        </Stack>
        {selectedProject && (
          <LargeProjectCard
            project={selectedProject}
            sx={{ width: isDesktopSize ? 'auto' : '100%' }}
          />
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};
