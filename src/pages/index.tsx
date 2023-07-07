import {
  AboutSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/Sections';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        scrollSnapType: 'y mandatory',
        overflowY: 'auto',
      }}
    >
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}
