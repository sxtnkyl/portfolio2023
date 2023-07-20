import { ProjectData } from '@/utils/projectData';
import { CardProps, Stack, Typography } from '@mui/material';
import { MotionProps } from 'framer-motion';
import { CloudCard } from '../CloudCard/CloudCard';

interface LargeProjectCardProps extends CardProps {
  project: ProjectData;
}

export const LargeProjectCard = ({
  project,
  sx,
  ...rest
}: LargeProjectCardProps & MotionProps) => {
  return (
    <CloudCard
      key={`${project.name}-largeCard`}
      layoutId={project.name}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.6 },
      }}
      sx={{
        zIndex: 2,
        maxWidth: '45%',
        padding: '1rem',
        ...sx,
      }}
      elevation={9}
      {...rest}
    >
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="body1" fontWeight={900}>
          header title
        </Typography>
      </Stack>
    </CloudCard>
  );
};
