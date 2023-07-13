import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FloatingHexTile } from '../HexPanel/FloatingHexTile';

const variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export const SkillCategory = ({ category }: { category: string }) => {
  return (
    <Box
      component={motion.div}
      variants={variants}
      position="relative"
      sx={{ isolation: 'isolate', paddingLeft: '1rem' }}
    >
      <FloatingHexTile tileSize={30} sx={{ top: 0, left: 0, zIndex: 1 }} />
      <Typography
        variant="button"
        sx={{ zIndex: 2, position: 'relative', fontWeight: 900 }}
      >
        {category}
      </Typography>
    </Box>
  );
};
