/* eslint-disable perfectionist/sort-objects */

/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { plugins } from './src/styles/plugins';
import { theme } from './src/styles/theme';

const config: Config = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme,
  plugins,
};

export default config;
