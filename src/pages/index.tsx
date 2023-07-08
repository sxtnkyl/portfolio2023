import {
  AboutSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/Sections';
import { Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const yRange = [0, 0.5, 1];
  const gradientArr = [
    `linear-gradient(0deg, #14D8FF 0%, #fafafa 100%)`,
    `linear-gradient(45deg, #00E6EF 0%, #fafafa 100%)`,
    `linear-gradient(90deg, #00E6EF 0%, #33F1D2 100%)`,
  ];
  const background = useTransform(scrollYProgress, yRange, gradientArr);

  return (
    <Container
      ref={ref}
      component={motion.main}
      transition={{
        duration: 1,
        ease: [0.075, 0.82, 0.165, 1],
      }}
      style={{ background: background as any }}
      sx={{
        scrollSnapType: 'y mandatory',
        overflowY: 'auto',
      }}
    >
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
}
