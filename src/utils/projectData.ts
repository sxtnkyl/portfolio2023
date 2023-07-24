/**
 * name: project name
 *
 * summary: short desc for what it does
 *
 * technicalChallenges: what problems did i tackle?
 *
 * solutions: how the technical challenges were solved
 *
 * concepts: langs/packages/concepts the project uses
 *
 * demoUrl: deployed project address
 *
 * githubUrl: project repo
 *
 * year: year project was made in
 *
 * active: pinned for visibility on Projects Section
 */
export interface ProjectData {
  name: string;
  summary: string;
  technicalChallenges: string;
  solutions: string;
  concepts: string[];
  demoUrl?: string;
  githubUrl: string;
  year: string;
  active: boolean;
}

export const projectData: ProjectData[] = [
  {
    name: 'HiRopes Boulder Buddy',
    summary:
      'Tool for providing a structured routine, documentation, and visualization of rock climbing progression.',
    technicalChallenges:
      'Create a mobile sized, cloud hosted application that implements enterprise-level CI/CD SaaS workflow and best coding practices.',
    solutions:
      'Leverage AWS Amplify for prod/dev pipeline releases, commit linting and feature branch merging review standards, build/type/test safety, and scalable code practices such as agnostic component composition. GraphQL provides real-time subscription updates and efficient queries while Formik achieves streamlined form management and validation.',
    concepts: [
      'Nextjs',
      'React',
      'Typescript',
      'AWS Amplify',
      'Formik',
      'Yup',
      'Jest',
      'Husky',
      'CI/CD',
      'Component Composition',
      'Separation of Concerns',
      'Maintainability/Reusability',
    ],
    demoUrl: 'https://hiropes.info',
    githubUrl: 'https://github.com/sxtnkyl/hiropes',
    year: '2023',
    active: true,
  },
  {
    name: 'Hex-folio',
    summary:
      "It's like a resume...but better! After a year and a half of enterprise experience and learning, it was time to give my portfolio an overhaul with a hexagonal flair.",
    technicalChallenges:
      'Develop a contemporary, responsive, and high-performance webpage alongside a repository that adheres to scalable coding practices for easy readability and updates. Seamlessly incorporate third-party component and form management libraries into the project. Craft an engaging user interface and captivating theme to enhance the overall design.',
    solutions:
      'Employ Next.js to implement optimized performance and accessability, ensuring speedy load times and enhanced SEO capabilities. Formik achieves streamlined form management and validation, offering users a seamless experience and validations when interacting with forms. The integration of framer-motion contributes flair and interactivity to the interface, enhancing user engagement. TypeScript ensures code quality and provides better developer support.',
    concepts: [
      'React',
      'Typescript',
      'Nextjs',
      'Material UI',
      'Framer Motion',
      'Formik',
      'Eslint/Prettier',
      'Component Composition',
      'Separation of Concerns',
      'Maintainability/Reusability',
    ],
    demoUrl: 'https://ksextonexe.info',
    githubUrl: 'https://github.com/sxtnkyl/portfolio2023',
    year: '2023',
    active: true,
  },
  {
    name: 'Beer Bulletin',
    summary:
      'Full stack application to find and trade beers, keep track of visited breweries, and unlock in app milestones.',
    technicalChallenges:
      'Create a full stack application using the Nextjs framework/Vercel deploy, Sequelize, and MongoDB.',
    solutions:
      'Nextjs will provide smooth server-side rendering, SEO, accessibility, and other necessary features to be an efficient and seamless PWA. Material UI and Framer Motion provide the UI experience, JWT are used for authentication, and Sequelize with MongoDB provide backend utility.',
    concepts: [
      'React',
      'Websockets',
      'JWT Authentication',
      'Authorized Routing',
      'PWA',
      'Middleware',
      "Non-Relational DB's",
    ],
    githubUrl: 'https://github.com/sxtnkyl/beer-bulletin',
    year: '2021',
    active: true,
  },
  {
    name: 'Tail Wag Dog Training',
    summary: 'Client landing page for a local canine training business',
    technicalChallenges:
      "A web page can directly influence public perception of a business's product. Therefore, this project's technical focus was on UX/UI experience, Google Lighthouse Metrics, production versioning, and developing client-dev relationship.",
    solutions:
      'Material UI design documentation was applied in order to create professional implementation of Material UI components and an aesthetically pleasing thematic. Framer Motion animation library was chosen to bring a fun and bouncy feel to a bright color palette while CSS properties were made sure to be compatible across as many browsers and screen sizes as possible, in order to increase customer satisfaction. Google Lighthouse Metrics were utilized to critique and improve performance, accessibility, SEO, and best practices. A production branch was kept as version control, while continuous client revision requests were discussed and integrated.',
    concepts: [
      'React',
      'Framer Motion',
      'Material UI',
      'Node.js',
      'Route53',
      'Cloudfront',
      'IAM',
      'S3',
      'API Gateway',
      'Lambda',
      'CORS policy',
    ],
    demoUrl: 'https://master.dmv0amx140mtx.amplifyapp.com/',
    githubUrl: 'https://github.com/sxtnkyl/tailwag',
    year: '2020',
    active: true,
  },
  {
    name: 'Url Shortener 2020',
    summary:
      'Shrink urls into a six-character code with this AWS powered browser tool',
    technicalChallenges:
      'This project was utilized as an exercise in understanding and building complex fullstack architectures with Node.js and AWS. Technical challenges included functional integration of various serverless services, proper security practices with separation of client and API, data routing, and billing monitoring.',
    solutions:
      'Route 53 SSL certificate was chosen to provide a secure connection for Cloudfront to safely handle request routing to either a static website hosted in an S3 bucket or data requests to API Gateway, therefore separating direct frontend http requests to backend data services. CORS is internally implemented across the various Amazon services through utilization of IAM policies, in order to make sure internal access is restricted to only required services. API Gateway data calls are then sent to the proper Lambda handlers which interact with DynamoDB. CloudWatch was fundamental in providing logs for troubleshooting connections between different services, as well as setting alarms for limiting data overload that would lead to unintended billing charges. A traditional rehash of a Express/MongoDB stack is also included with the repo.',
    concepts: [
      'React',
      'Node.js',
      'Route53',
      'Cloudfront',
      'S3',
      'API Gateway',
      'Lambda',
      'DynamoDB',
      'CloudWatch',
      'Express',
      'MongoDB',
      'CORS policy',
    ],
    githubUrl: 'https://github.com/sxtnkyl/url2020',
    year: '2020',
    active: false,
  },
  {
    name: 'Pokedex 2020',
    summary:
      'A spin on a classic API. Use this desktop app to search through every Poke',
    technicalChallenges:
      "We must go deeper! This project sought to expand knowledge and application of global context, memoized renders, data fetching with external API's, and animating components.",
    solutions:
      "In order to create a controlled global context throughout multiple layers of components, React's useContext was utilized with a Redux structured global state. Updates to the global state were handled with the useReducer hook, defined in the context provider. Axios was used to fetch data, where the issue of limiting user fetch requests was solved by creating a debouncing hook. This solution leverages React's useCallback hook to limit useEffect triggering until a defined dependency updated. Handling a large amount of data became tedious, so Proptype verification was implemented where needed. React Spring was implemented to create complex animations such as the entire PokeDex opening or closing, a revolving carousel, and screen transitions.",

    concepts: [
      'React',
      'Global State Management',
      'Advanced React Hooks',
      'Fetch API',
      'Proptype Verification',
      'React Spring',
      'Material UI',
    ],
    demoUrl: 'https://sxtnkyl.github.io/teambuilder/',
    githubUrl: 'https://github.com/sxtnkyl/teambuilder',
    year: '2020',
    active: true,
  },
  {
    name: 'Hand Sampler',
    summary:
      'Survey learning tool for quickly generating geologic soil descriptions in a form submission format',
    technicalChallenges:
      "Forms: the corner'STONE' of production grade React products. This project was an excellent opportunity for learning how to build custom forms from scratch, understanding controlled/uncontrolled components, and to dive into a widely used, React based component library- Material UI.",
    solutions:
      "Material UI was implemented by integration of a side-nav for quick navigation, app bar header for main calls to action, pagination footer to change questions, and unique card components to display/submit the current question. A form compiler component was employed to receive and conglomerate each controlled components' data. Github Pages was determined to be an appropriate use case for hosting this single-page web app.",
    concepts: [
      'React',
      'Material UI',
      'Material Design Concepts',
      'Form Submission',
      'Controlled-Components',
      'Github Pages',
    ],
    demoUrl: 'https://sxtnkyl.github.io/handsampler/',
    githubUrl: 'https://github.com/sxtnkyl/handsampler',
    year: '2019',
    active: false,
  },
];
