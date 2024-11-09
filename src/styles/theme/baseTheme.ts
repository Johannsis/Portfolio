import defaultTheme from 'tailwindcss/defaultTheme';

export const baseTheme = {
  ...defaultTheme,
  extend: {
    colors: {
      primary: {
        '10': '#000000',
        '20': '#030b07',
        '30': '#06170e',
        '40': '#092215',
        '50': '#0c2d1c',
        '60': '#0f3923',
        '70': '#124429',
        '80': '#154f30',
        '90': '#185a37',
        '100': '#1b663e',
      },
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
    },
  },
};
