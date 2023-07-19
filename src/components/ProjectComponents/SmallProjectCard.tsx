import { ProjectData } from '@/utils/projectData';
import { CardProps, Typography } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';

interface SmallProjectCardProps extends CardProps {
  selectedProject?: ProjectData;
  setSelectedProject: Dispatch<SetStateAction<ProjectData | undefined>>;
  project: ProjectData;
  componentWidth: number;
}

export const SmallProjectCard = ({
  selectedProject,
  setSelectedProject,
  project,
  componentWidth,
  ...rest
}: SmallProjectCardProps & MotionProps) => {
  const isSelected = useMemo(() => {
    return selectedProject === project;
  }, [project, selectedProject]);

  return (
    <>
      {!isSelected ? (
        <CloudCard
          onClick={() => setSelectedProject(project)}
          sx={{
            width: componentWidth * 0.25,
            height: componentWidth * 0.25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.5rem',
            cursor: 'pointer',
          }}
          elevation={9}
          whileHover={{
            y: -5,
            transition: { duration: 0.1, delay: 0 },
          }}
          whileTap={{ scale: 0.9 }}
          layout
          initial={{ scale: 1 }}
          animate={{
            scale: 0.8,
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
          <Typography
            component={motion.span}
            variant="caption"
            fontWeight={900}
          >
            {project.name}
          </Typography>
        </CloudCard>
      ) : (
        <div>placeholder</div>
      )}
    </>
  );
};
