import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import skillData, { SkillDataObject } from '@/utils/skillsData';
import useWindowDimensions from '@/utils/useWindowDimensions';
import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FramerFadeInWrapper } from '../FramerWrappers/FramerFadeInWrapper';
import { SectionContainer } from '../SectionContainer';
import { SkillCategory, SkillListItem } from '../SkillComponents';

const categoryListVariants = {
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

const paragraphVariants = {
  initial: { height: 'auto', opacity: 1 },
  animate: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const SkillsSection = () => {
  const { width: isDesktopSize } = useWindowDimensions({ breakWidth: 600 });
  const responsiveWidthSize = useMemo(
    () => (isDesktopSize ? '50%' : '100%'),
    [isDesktopSize]
  );

  const [inView, setInView] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<SkillDataObject['category']>();
  useEffect(() => {
    setSelectedCategory(isDesktopSize ? 'Front End' : undefined);
  }, [isDesktopSize]);

  const skillCategoriesList = useMemo(() => {
    return skillData.map((skill) => (
      <SkillCategory
        key={skill.category}
        category={skill.category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    ));
  }, [selectedCategory]);

  const selectedSkillCategorySkillsList = useMemo(() => {
    return (
      skillData
        .find((skillObject) => skillObject.category === selectedCategory)
        ?.skills.map((skill) => <SkillListItem key={skill} skill={skill} />) ??
      []
    );
  }, [selectedCategory]);

  const shouldDisplaySkillParagraph = useMemo(() => {
    return isDesktopSize || !selectedCategory;
  }, [isDesktopSize, selectedCategory]);

  return (
    <SectionContainer
      sx={{
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        flexDirection: isDesktopSize ? 'row' : 'column',
      }}
    >
      <Stack
        spacing={4}
        sx={{
          zIndex: 2,
          width: responsiveWidthSize,
          padding: isDesktopSize ? '2rem' : '1rem 0',
        }}
      >
        <Box
          component={motion.div}
          variants={paragraphVariants}
          initial="initial"
          animate={shouldDisplaySkillParagraph ? 'initial' : 'animate'}
        >
          <Typography
            key="skillParagraph"
            component={FramerFadeInWrapper}
            variant="h6"
            sx={{
              fontWeight: 900,
              textShadow:
                '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
            }}
          >
            During my career I&apos;ve used many technologies to build scalable,
            maintainable, and intelligible applications. I currently enjoy
            leveraging Nextjs, Material-UI, and AWS services for personal
            projects, but here is a comprehensive list of categorized tools
            I&apos;m familiar with.
          </Typography>
        </Box>
        <Stack
          component={motion.div}
          variants={categoryListVariants}
          animate={inView ? 'show' : 'hidden'}
          onViewportEnter={() => setInView(true)}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          spacing={isDesktopSize ? 4 : 2}
          flex={1}
        >
          <LayoutGroup>{skillCategoriesList}</LayoutGroup>
        </Stack>
      </Stack>
      <AnimatePresence mode="wait">
        <Stack
          spacing={isDesktopSize ? 4 : 0}
          sx={{
            flexDirection: isDesktopSize ? 'column' : 'row',
            flexWrap: isDesktopSize ? 'inherit' : 'wrap',
            justifyContent: isDesktopSize ? 'flex-start' : 'center',
            padding: isDesktopSize ? '2rem 0' : '0',
            alignItems: 'center',
            overflowY: 'auto',
            overflowX: 'hidden',
            zIndex: 2,
            flex: 1,
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
