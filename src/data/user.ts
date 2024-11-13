interface SocialLinks {
  icon: 'github' | 'linkedin' | 'mail';
  name: string;
  url: string;
}

export const userData = {
  description:
    "I'm a excited Software Engineer based in the Dominican Republic. I'm currently studying to be a fullstack developer and hopefully a software architect in the future. I have strong interests in design, architecture, visually stunning, performant and friendly websites and in every amazing project I was able to improve even further my skills and knowledge to achieve the best results for a succesful website.",
  experience: [
    {
      description: 'Developed mobile banking apps.',
      name: 'TelevisaUnivision',
      period: '2022 - present',
      position: 'React Frontend Developer',
      stack: [
        'Next.js',
        'Relay',
        'GraphQL',
        'Zustand',
        'Redis',
        'Tailwind CSS',
      ],
      url: 'https://corporate.televisaunivision.com/',
    },
    {
      description:
        "Optimized performance of the Jenkins'pipeline to reduce the duration of the workflow up to 80%.",
      name: 'Shutterstock',
      period: '2022 - 2022',
      position: 'Fullstack Engineer',
      stack: [
        'Node.js',
        'Next.js',
        'JavaScript',
        'React',
        'Storybook',
        'HTML',
        'CSS',
        'Cypress',
        'Contentful',
        'Google Ads',
        'Emotion',
        'Redux',
        'useContext',
        'Jenkins',
      ],
      url: 'https://www.shutterstock.com/',
    },
    {
      description: 'Developed mobile banking apps.',
      name: 'Tevolv',
      period: '2019 - 2022',
      position: 'Software Engineer',
      stack: [
        'Node.js',
        'Java',
        'JavaScript',
        'Kony',
        'iOS',
        'Android',
        'Android Studio',
      ],
      url: 'https://www.tevolv.com/',
    },
  ],
  job: 'Software Engineer',
  name: 'Johannes Hoersch',
  projects: [],
  rights: '© 2024 Johannes Hoersch. All Rights Reserved',
  skills: { back: [], front: [] },
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
