import { ProjectData } from '@/utils/projectData';
import { CardProps, Stack, Typography } from '@mui/material';
import { MotionProps, motion } from 'framer-motion';
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
      sx={{
        padding: '1rem',
        ...sx,
      }}
      elevation={9}
      {...rest}
    >
      <Stack component={motion.div} alignItems="center" justifyContent="center">
        <Typography component={motion.p} variant="body1" fontWeight={900}>
          header title
        </Typography>
      </Stack>
    </CloudCard>
  );
};
