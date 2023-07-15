import { Card, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const badgeVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <Card
      component={motion.div}
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
        minWidth: '50%',
        maxWidth: '80%',
        backgroundColor: '#33F1D2',
        backdropFilter: 'blur(20px)',
        padding: '0 1rem',
      }}
    >
      <Typography variant="button" sx={{ zIndex: 2, position: 'relative' }}>
        {skill}
      </Typography>
    </Card>
  );
};
