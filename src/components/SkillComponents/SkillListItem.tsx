import useWindowDimensions from '@/utils/useWindowDimensions';
import { Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CloudCard } from '../CloudCard/CloudCard';

const badgeVariants = {
  hidden: { opacity: 0, x: 30, transition: { duration: 0.25, delay: 0.25 } },
  show: { opacity: 1, x: 0, transition: { duration: 0.25, delay: 0.25 } },
};

export const SkillListItem = ({ skill }: { skill: string }) => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });

  return isDesktopSize ? (
    <CloudCard
      key={skill}
      variants={badgeVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      elevation={9}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '10%',
        maxHeight: '30%',
        backdropFilter: 'blur(20px)',
        padding: '0 1rem',
        width: isDesktopSize ? '60%' : 'auto',
      }}
    >
      <Typography variant="button" sx={{ zIndex: 2, position: 'relative' }}>
        {skill}
      </Typography>
    </CloudCard>
  ) : (
    <Chip
      component={motion.span}
      label={skill}
      key={skill}
      variants={badgeVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        height: 'fit-content',
        margin: '0 0.5rem',
        minWidth: '40%',
        '& .MuiChip-label': {
          padding: '0.5rem',
          overflowWrap: 'break-word',
          textOverflow: 'clip',
          whiteSpace: 'normal',
        },
      }}
    />
  );
};
