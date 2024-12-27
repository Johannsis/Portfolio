import plugin from 'tailwindcss/plugin';

export const basePlugins = [
  plugin(({ addComponents, addUtilities }): void => {
    addComponents({
      '.body-2xs': {
        'font-family': 'var(--font-montserrat)',
        'font-size': '0.75rem',
        'font-weight': '700',
        'line-height': '1.25rem',
        'text-align': 'left',
      },
      '.body-lg': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'clamp(1rem,5vw,2rem)',
        'font-weight': '500',
        'line-height': 'clamp(1rem,5vw,2rem)',
        'text-align': 'left',
      },
      '.body-md': {
        'font-family': 'var(--font-montserrat)',
        'font-size': '1rem',
        'font-weight': '500',
        'line-height': '1.2',
        'text-align': 'left',
      },
      '.body-sm': {
        'font-family': 'var(--font-montserrat)',
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.5',
        'text-align': 'left',
      },
      '.body-xs': {
        'font-family': 'var(--font-montserrat)',
        'font-size': '0.875rem',
        'font-weight': '700',
        'line-height': '1.5',
        'text-align': 'left',
      },
      '.titles-2xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'clamp(1rem,5vw,2rem)',
        'font-weight': '300',
        'line-height': 'clamp(1rem,5vw,2rem)',
        'text-align': 'left',
      },
      '.titles-3xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'clamp(1rem,5vw,2rem)',
        'font-weight': '300',
        'line-height': 'clamp(1rem,5vw,2rem)',
        'text-align': 'left',
      },
      '.titles-4xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'clamp(2.25rem,5vw,3rem)',
        'font-weight': '300',
        'line-height': 'clamp(2.5rem,5vw,1)',
        'text-align': 'left',
      },
      '.titles-lg': {
        'font-family': 'var(--font-montserrat)',
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.25rem',
        'text-align': 'left',
      },
      '.titles-xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'clamp(1.125rem,5vw,1.25rem)',
        'font-weight': '400',
        'line-height': '1.5',
        'text-align': 'left',
      },
    });
    addUtilities({
      '.glassmorphism-background': {
        '-webkit-backdrop-filter': 'blur(3px)',
        'backdrop-filter': 'blur(3px)',
        background: 'rgba(0, 0, 0, 0.05)',
        'border-radius': '16px',
        'box-shadow': '0 4px 30px rgba(255, 255, 255, 0.1)',
      },
      '.glassmorphism-background-dark': {
        '-webkit-backdrop-filter': 'blur(3px)',
        'backdrop-filter': 'blur(3px)',
        background: 'rgba(255, 255, 255, 0.05)',
        'border-radius': '16px',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    });
  }),
];
