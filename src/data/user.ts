interface SocialLinks {
  icon: 'github' | 'linkedin' | 'mail';
  name: string;
  url: string;
}

export const userData = {
  experience: [
    {
      companyName: 'TelevisaUnivision',
      description:
        'Implemented and optimized various tools and technologies, including Taboola, CivicScience, Google Tag Manager, OneTrust, and Next.js, to maximize ad revenue, enhance performance, ensure privacy compliance, and improve security, while maintaining SEO best practices and monitoring system performance.',
      period: '2022 - present',
      position: 'Senior Front-End Developer',
      stack: [
        'Next.js',
        'Relay',
        'GraphQL',
        'Zustand',
        'Redis',
        'Tailwind CSS',
        'React',
        'TypeScript',
      ],
      url: 'https://corporate.televisaunivision.com/',
    },
    {
      companyName: 'Shutterstock',
      description:
        'Optimized source code for faster end-user experience, streamlined the CI/CD pipeline to reduce workflow time by up to 80%, and maintained source code, analytics, and tests.',
      period: '2022 - 2022',
      position: 'Full-Stack Engineer',
      stack: [
        'Node.js',
        'Next.js',
        'JavaScript',
        'React',
        'Storybook',
        'HTML 5',
        'CSS 3',
        'Cypress',
        'Contentful',
        'Redux',
        'useContext',
        'Jenkins',
        'Github Actions',
      ],
      url: 'https://www.shutterstock.com/',
    },
    {
      companyName: 'BairesDev',
      description:
        'Achieved high customer satisfaction through high-quality code and professionalism, provided services to companies like Shutterstock and TelevisaUnivision, and led large-scale projects for major organizations.',
      period: '2019 - PRESENT',
      position: 'Software Engineer',
      stack: ['Jira'],
      url: 'https://www.bairesdev.com/',
    },
    {
      companyName: 'Tevolv',
      description:
        'Developed mobile apps for banks using the MVC pattern, created Java microservices for T24 Transact, and performed comprehensive software maintenance, including updates, patches, and optimizations.',
      period: '2019 - 2022',
      position: 'Software Engineer',
      stack: [
        'Node.js',
        'Java',
        'JavaScript',
        'Kony framework',
        'iOS',
        'Android',
        'Android Studio',
        'T24 Backend',
      ],
      url: 'https://www.tevolv.com/',
    },
  ],
  job: 'Software Engineer',
  location: 'Santo Domingo, DR',
  motto:
    'I build fast, maintainable, pretty and reliable digital experiences for the web.',
  name: 'Johannes Hoersch',
  projects: [],
  social: [
    {
      icon: 'mail',
      name: 'email',
      url: 'mailto:johanneshoersch@gmail.com',
    },
    {
      icon: 'linkedin',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/johanneshoersch/',
    },
    {
      icon: 'github',
      name: 'github',
      url: 'https://github.com/Johannsis',
    },
  ] satisfies SocialLinks[],
};
