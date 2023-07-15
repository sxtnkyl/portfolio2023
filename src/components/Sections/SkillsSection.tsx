import skillData, { SkillDataObject } from '@/utils/skillsData';
import { Stack, Typography } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { CloudCard } from '../CloudCard/CloudCard';
import { SectionContainer } from '../SectionContainer';
import { SkillBadge, SkillCategory } from '../SkillComponents';

const variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const SkillsSection = () => {
  const [inView, setInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    SkillDataObject['category']
  >('IDE/Scripting Languages');

  const skillCategoriesList = skillData.map((skill) => (
    <SkillCategory
      key={skill.category}
      category={skill.category}
      selectedCategory={selectedCategory}
      onClick={() => {
        setSelectedCategory(skill.category);
      }}
    />
  ));

  const selectedSkillCategorySkillsList = useMemo(() => {
    return skillData
      .find((skillObject) => skillObject.category === selectedCategory)
      ?.skills.map((skill) => <SkillBadge key={skill} skill={skill} />);
  }, [selectedCategory]);

  return (
    <SectionContainer sx={{ display: 'flex', textAlign: 'center' }}>
      <CloudCard sx={{ width: '40%' }}>
        <Typography variant="body2" fontWeight={900} padding="2rem">
          During my career I&apos;ve used many technologies to build scalable,
          maintainable, and intelligible applications. I currently enjoy
          leveraging Nextjs, Material-UI, and AWS services for personal
          projects, but here is a comprehensive list of tools I&apos;m familiar
          with.
        </Typography>
        <Stack
          component={motion.div}
          variants={variants}
          animate={inView ? 'show' : 'hidden'}
          onViewportEnter={() => setInView(true)}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <LayoutGroup>{skillCategoriesList}</LayoutGroup>
        </Stack>
      </CloudCard>
      <Stack
        sx={{
          flex: 1,
          alignItems: 'center',
          overflowY: 'auto',
          padding: '2rem 0',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '1rem',
            opacity: '0.5',
          },
          '&::-webkit-scrollbar-track': {
            width: '0.5rem',
            backgroundColor: '#334A52',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#96AFB8',
            borderRadius: '2px',
          },
        }}
        spacing={4}
      >
        <AnimatePresence mode="wait">
          {selectedSkillCategorySkillsList}
        </AnimatePresence>
      </Stack>
    </SectionContainer>
  );
};
