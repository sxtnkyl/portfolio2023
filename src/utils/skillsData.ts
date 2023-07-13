export interface SkillDataObject {
  category: string;
  skills: string[];
}

const skillData: SkillDataObject[] = [
  {
    category: 'IDE/Scripting Languages',
    skills: ['Visual Studio Code', 'HTML', 'SCSS', 'JavaScript', 'Typescript'],
  },
  {
    category: 'Front End',
    skills: [
      'React',
      'Nextjs',
      'Material UI',
      'Formik',
      'Framer Motion',
      'REST/GraphQL API',
      'Styled Components',
      'TailwindCSS',
      'Bootstrap',
      'React Router/DOM',
      'Jest/React Testing Library',
      'React Intl',
      'Vite',
      "PWA's",
      'Prettier/ESlint/Husky',
    ],
  },
  {
    category: 'Back End',
    skills: [
      'AWS Cloud Services',
      'NodeJS',
      'Dotenv',
      'Express',
      'Nodemon',
      'Hashing',
      'PostgresQL',
      'MongoDB',
      'Postman',
      'CORS Integration',
    ],
  },
  {
    category: 'Methodologies',
    skills: ['Agile', 'Jira', 'Slack', 'Figma', 'SaaS'],
  },
  {
    category: 'Certs / Courses / Groups',
    skills: [
      'Georgia Tech Coding Bootcamp 2021',
      'Udemy JS Algorithmsand Data Structures Masterclass',
      'Udemy Understanding Typescript 2023',
      'FCC Responsive Web Design',
      'FCC JS Algorithms and Data Structures',
      'FCC Front End Libraries',
      'Levelup Tutorials- Animating React',
      'ReactATL Meetup Group',
    ],
  },
  {
    category: 'Consulting Experience',
    skills: [
      'Over three years of independent task management',
      'Experience with municiple and federal projects',
      'Team lead coordination with public/private sector clients',
      'Inner company cross-discipline collaboration',
      'Training and oversight of new staff',
      'Expansion of company services through research, acquisition, and application of new technologies',
      'Independently motivated',
    ],
  },
];

export default skillData;
