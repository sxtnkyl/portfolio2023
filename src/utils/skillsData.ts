type SkillCategory =
  | 'IDE/Scripting Languages'
  | 'Front End'
  | 'Back End'
  | 'Methodologies'
  | 'Certs / Courses / Groups'
  | 'SaaS Experience';
export interface SkillDataObject {
  category: SkillCategory;
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
      'React Router/DOM',
      'Jest/React Testing Library',
      'React Intl',
      'Launch Darkly',
      'Vite',
      "PWA's",
      'Prettier/ESlint/Husky',
      'Styled Components',
      'Bootstrap',
      'TailwindCSS',
    ],
  },
  {
    category: 'Back End',
    skills: [
      'AWS Cloud Services',
      'NodeJS',
      'Keycloak',
      'Harness',
      'Circle CI',
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
    skills: ['Agile', 'Scrum', 'Feature Driven Dev', 'Jira', 'Slack', 'Figma'],
  },
  {
    category: 'SaaS Experience',
    skills: [
      'Inner company cross-discipline collaboration',
      'Team lead coordination with public/private sector clients',
      'Training and peer collaboration with new staff',
      'Proof of concept investigation of new technologies',
      'Expansion of company services through research',
      'Third party hardware integration',
      'Independently motivated',
    ],
  },
  {
    category: 'Certs / Courses / Groups',
    skills: [
      'Georgia Tech Coding Bootcamp 2021',
      'Udemy JS Algorithms and Data Structures Masterclass',
      'Udemy Understanding Typescript 2023',
      'FCC Responsive Web Design',
      'FCC JS Algorithms and Data Structures',
      'FCC Front End Libraries',
      'Levelup Tutorials- Animating React',
      'ReactATL Meetup Group',
    ],
  },
];

export default skillData;
