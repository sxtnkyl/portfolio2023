import { Typography } from '@mui/material';
import { CloudCard } from '../CloudCard/CloudCard';

const badgeVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <CloudCard
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
        width: '60%',
        backdropFilter: 'blur(20px)',
        padding: '0 1rem',
      }}
    >
      <Typography variant="button" sx={{ zIndex: 2, position: 'relative' }}>
        {skill}
      </Typography>
    </CloudCard>
  );
};
