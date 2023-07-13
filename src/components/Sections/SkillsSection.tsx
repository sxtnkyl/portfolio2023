import skillData from '@/utils/skillsData';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { SkillCategory } from '../SkillComponents';

const variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

export const SkillsSection = () => {
  const skillCategoriesList = skillData.map((skill) => (
    <SkillCategory key={skill.category} category={skill.category} />
  ));

  const [inView, setInView] = useState(false);

  return (
    <SectionContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      <Stack
        component={motion.div}
        variants={variants}
        animate={inView ? 'show' : 'hidden'}
        onViewportEnter={() => setInView(true)}
        spacing={4}
      >
        {skillCategoriesList}
      </Stack>
    </SectionContainer>
  );
};
