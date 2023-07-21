import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import skillData, { SkillDataObject } from '@/utils/skillsData';
import { Stack, Typography, useMediaQuery } from '@mui/material';
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
  const isMediumSizeScreen = useMediaQuery('(min-width:600px)');

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
    <SectionContainer
      sx={{ position: 'relative', display: 'flex', textAlign: 'center' }}
    >
      <Stack sx={{ width: '50%', zIndex: 2 }}>
        <FramerFadeInWrapper>
          <Typography
            variant="h6"
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
      <AnimatePresence mode="wait">
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
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: convertHexToRgbOpacity({
                hex: '#96AFB8',
                opacity: '0.4',
              }),
              borderRadius: '2px',
            },
          }}
        >
          {selectedSkillCategorySkillsList}
        </Stack>
      </AnimatePresence>
    </SectionContainer>
  );
};
