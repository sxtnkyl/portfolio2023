import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { ProjectData } from '@/utils/projectData';
import { CardProps, Grid, Typography } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';

interface SmallProjectCardProps extends CardProps {
  selectedProject?: ProjectData;
  setSelectedProject: Dispatch<SetStateAction<ProjectData | undefined>>;
  project: ProjectData;
}

export const SmallProjectCard = ({
  selectedProject,
  setSelectedProject,
  project,
  ...rest
}: SmallProjectCardProps & MotionProps) => {
  const isSelected = useMemo(() => {
    return selectedProject === project;
  }, [project, selectedProject]);

  return (
    <Grid
      xs={12}
      md={6}
      item
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {isSelected ? (
        <CloudCard
          key="smallCard-placeholder"
          onClick={() => setSelectedProject(undefined)}
          sx={{
            width: '80%',
            height: '80%',
            backgroundColor: convertHexToRgbOpacity({
              hex: '#96AFB8',
              opacity: '0.2',
            }),
            cursor: 'pointer',
            margin: '1rem',
          }}
          layout
          initial={{ scale: 1 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.4,
            },
          }}
          exit={{ scale: 1 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
          }}
        />
      ) : (
        <CloudCard
          onClick={() => setSelectedProject(project)}
          sx={{
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.5rem',
            cursor: 'pointer',
            margin: '1rem',
          }}
          elevation={9}
          whileHover={{
            y: -5,
            transition: { duration: 0.1, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 1 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.4,
            },
          }}
          exit={{ scale: 1 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
          }}
          {...rest}
        >
          <Typography component={motion.span} variant="body1" fontWeight={900}>
            {project.name}
          </Typography>
          <Typography
            component={motion.span}
            variant="subtitle1"
            fontWeight={900}
          >
            ({project.year})
          </Typography>
        </CloudCard>
      )}
    </Grid>
  );
};
