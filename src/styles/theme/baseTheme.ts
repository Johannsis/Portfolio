import defaultTheme from 'tailwindcss/defaultTheme';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

export const baseTheme: Partial<CustomThemeConfig> = {
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
      secondary: {
        '40': '#c6e2d8',
        '50': '#9cc7bf',
        '100': '#e3fff5',
      },
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
    },
  },
};
