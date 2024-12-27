interface SocialLinks {
  icon: 'github' | 'linkedin' | 'mail';
  name: string;
  url: string;
}

export const userData = {
  description: `I'm a excited Software Engineer passionate about crafting the most performant, pixel-perfect and accesible interfaces that mixes creative designs 
  with maintainable engineering. My favorite part of my work is integrating the latest fast technologies with your thoughtful and 
  desired design to create experiences that'll engage the users not only for looks, but also responsiveness, performance and usability.
  \n Currently, I'm a Senior Front-End Engineer at TelevisaUnivision, specializing in performance and new features. 
  I contribute to the creation and integration of UI components that power TelevisaUnivision's sites'frontend, ensuring that the platform meets the highest 
  standard of quality, performance and best practices to deliver an outstanding user experience.`,
  experience: [
    {
      companyName: 'TelevisaUnivision',
      description: 'Developed mobile banking apps.',
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
      companyName: 'Shutterstock',
      description:
        "Optimized performance of the Jenkins'pipeline to reduce the duration of the workflow up to 80%.",
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
      companyName: 'Tevolv',
      description: 'Developed mobile banking apps.',
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
  location: 'Santo Domingo, Dominican Republic',
  motto:
    'I build fast, reliable and pixel-perfect digital experiences for the web.',
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
