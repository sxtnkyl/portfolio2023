import skillData, { SkillDataObject } from '@/utils/skillsData';
import { Stack, Typography } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
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
  const [selectedCategory, setSelectedCategory] =
    useState<SkillDataObject['category']>('Front End');

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
      <Stack sx={{ width: '40%', zIndex: 2 }}>
        <FramerFadeInWrapper>
          <Typography
            variant="body1"
            fontWeight={900}
            padding="2rem"
            sx={{
              textShadow:
                '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
            }}
          >
            During my career I&apos;ve used many technologies to build scalable,
            maintainable, and intelligible applications. I currently enjoy
            leveraging Nextjs, Material-UI, and AWS services for personal
            projects, but here is a comprehensive list of tools I&apos;m
            familiar with.
          </Typography>
        </FramerFadeInWrapper>
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
      </Stack>
      <Stack
        spacing={4}
        sx={{
          flex: 1,
          alignItems: 'center',
          overflowY: 'auto',
          padding: '2rem 0',
          zIndex: 2,
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
      >
        <AnimatePresence mode="wait">
          {selectedSkillCategorySkillsList}
        </AnimatePresence>
      </Stack>
    </SectionContainer>
  );
};
