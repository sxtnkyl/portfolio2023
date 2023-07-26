import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { ProjectData } from '@/utils/projectData';
import { CardProps, Stack, Typography } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';

interface SmallProjectCardProps extends CardProps {
  selectedProject?: ProjectData;
  setSelectedProject: Dispatch<SetStateAction<ProjectData | undefined>>;
  project: ProjectData;
  cardDimensions: { height: number | string; width: number | string };
}

export const SmallProjectCard = ({
  selectedProject,
  setSelectedProject,
  project,
  cardDimensions,
  ...rest
}: SmallProjectCardProps & MotionProps) => {
  const { height, width } = cardDimensions;
  const isSelected = useMemo(() => {
    return selectedProject === project;
  }, [project, selectedProject]);

  return (
    <Stack
      sx={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}
    >
      {isSelected ? (
        <CloudCard
          key="smallCard-placeholder"
          onClick={() => setSelectedProject(undefined)}
          sx={{
            width,
            height,
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
            width,
            height,
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
    </Stack>
  );
};
