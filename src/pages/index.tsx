import {
  ContactSection,
  IntroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/Sections';
import { useFramerBackgroundAnimation } from '@/utils/FramerAnimations/useFramerBackgroundAnimation';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { background } = useFramerBackgroundAnimation({ ref });

  return (
    <Container
      ref={ref}
      component={motion.main}
      transition={{
        duration: 1,
        ease: [0.075, 0.82, 0.165, 1],
      }}
      style={{ background: background as any }}
      maxWidth={false}
      sx={{
        scrollSnapType: 'y mandatory',
        overflowY: 'auto',
        overflowX: 'hidden',
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
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
}
