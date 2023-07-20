import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { ProjectData } from '@/utils/projectData';
import { GitHub } from '@mui/icons-material';
import { Box, Button, CardProps, Chip, Stack, Typography } from '@mui/material';
import { MotionProps } from 'framer-motion';
import { CloudCard } from '../CloudCard/CloudCard';

interface LargeProjectCardProps extends CardProps {
  project: ProjectData;
}

export const LargeProjectCard = ({
  project,
  sx,
  ...rest
}: LargeProjectCardProps & MotionProps) => {
  const {
    name,
    summary,
    technicalChallenges,
    solutions,
    concepts,
    demoUrl,
    githubUrl,
  } = project;

  const conceptChips = concepts.map((concept) => (
    <Chip key={concept} label={concept} />
  ));
  return (
    <CloudCard
      key={`${project.name}-largeCard`}
      layoutId={project.name}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.6 },
      }}
      sx={{
        zIndex: 2,
        maxWidth: '45%',
        ...sx,
      }}
      elevation={9}
      {...rest}
    >
      <Stack
        alignItems="center"
        spacing={3}
        sx={{
          padding: '2rem',
          height: '100%',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '1rem',
            opacity: '0.2',
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
        <Typography variant="h5" fontWeight={900}>
          {name}
        </Typography>
        <Typography variant="body2" fontWeight={900}>
          {summary}
        </Typography>
        <Box>
          <Typography variant="h6" fontWeight={900}>
            Technical Challenges:
          </Typography>
          <Typography variant="body2" fontWeight={900}>
            {technicalChallenges}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={900}>
            Solutions:
          </Typography>
          <Typography variant="body2" fontWeight={900}>
            {solutions}
          </Typography>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
        >
          {conceptChips}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="flex-end"
          alignSelf="flex-end"
          flex={1}
        >
          {demoUrl && (
            <Button
              aria-label="link to live demo"
              target="_blank"
              rel="noopener noreferrer"
              href={demoUrl}
              variant="contained"
              color="secondary"
              style={{ marginRight: '16px', height: 'fit-content', color: '' }}
            >
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              aria-label="link to code repo"
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
              variant="contained"
              color="secondary"
              sx={{ height: 'fit-content' }}
            >
              <GitHub />
            </Button>
          )}
        </Stack>
        {!demoUrl && (
          <Typography variant="body2" alignSelf="flex-end" fontStyle="italic">
            Demo currently paused due to hosting costs*
          </Typography>
        )}
      </Stack>
    </CloudCard>
  );
};
