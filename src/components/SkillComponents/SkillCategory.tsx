import { SkillDataObject } from '@/utils/skillsData';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FloatingHexTile } from '../HexPanel/FloatingHexTile';

const variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export const SkillCategory = ({
  category,
  selectedCategory,
  onClick,
}: {
  category: string;
  selectedCategory: SkillDataObject['category'];
  onClick: () => void;
}) => {
  const isSelected = useMemo(() => {
    return category === selectedCategory;
  }, [category, selectedCategory]);

  return (
    <Box
      component={motion.div}
      variants={variants}
      position="relative"
      sx={{ isolation: 'isolate', paddingLeft: '1rem' }}
    >
      {isSelected && (
        <FloatingHexTile tileSize={30} sx={{ top: 0, left: -10, zIndex: 1 }} />
      )}
      <Button
        variant={isSelected ? 'contained' : 'outlined'}
        color={isSelected ? 'secondary' : 'primary'}
        onClick={onClick}
      >
        <Typography
          variant="button"
          sx={{ zIndex: 2, position: 'relative', fontWeight: 900 }}
        >
          {category}
        </Typography>
      </Button>
    </Box>
  );
};
