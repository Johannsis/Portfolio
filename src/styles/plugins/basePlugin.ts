import plugin from 'tailwindcss/plugin';

export const basePlugins = [
  plugin(({ addComponents, addUtilities, theme }): void => {
    addComponents({
      '.body-2xs': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing-2xs)',
        'font-weight': '700',
        'line-height': 'var(--font-spacing-xs)',
        'text-align': 'left',
      },
      '.body-lg': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--lg)',
        'font-weight': '500',
        'line-height': 'var(--font-spacing--md)',
        'text-align': 'left',
      },
      '.body-md': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--md)',
        'font-weight': '500',
        'line-height': 'var(--font-spacing--sm)',
        'text-align': 'left',
      },
      '.body-sm': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--sm)',
        'font-weight': '400',
        'line-height': 'var(--font-spacing--sm)',
        'text-align': 'left',
      },
      '.body-xs': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--xs)',
        'font-weight': '700',
        'line-height': '18.2px',
        'text-align': 'left',
      },
      '.container-wrapper': {
        'border-radius':
          'var(--corner-radius-large-radius) var(--zero) var(--zero) var(--corner-radius-large-radius)',
        filter: 'drop-shadow(0 60px 24px rgba(12,47,70,1))',
      },
      '.titles-2xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--2xl)',
        'font-weight': '300',
        'line-height': 'var(--font-spacing--xl)',
        'text-align': 'left',
      },
      '.titles-3xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--3xl)',
        'font-weight': '300',
        'line-height': 'var(--font-spacing--2xl)',
        'text-align': 'left',
      },
      '.titles-4xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': 'var(--font-sizing--4xl)',
        'font-weight': '300',
        'line-height': 'var(--font-spacing--3xl)',
        'text-align': 'left',
      },
      '.titles-lg': {
        'font-family': 'var(--font-montserrat)',
        'font-size': ' var(--font-sizing--lg)',
        'font-weight': '400',
        'line-height': 'var(--font-spacing--sm)',
        'text-align': 'left',
      },
      '.titles-xl': {
        'font-family': 'var(--font-montserrat)',
        'font-size': ' var(--font-sizing--xl)',
        'font-weight': '400',
        'line-height': 'var(--font-spacing--md)',
        'text-align': 'left',
      },
    });
    addUtilities({
      '.animation-timing': {
        'transition-duration': '100ms',
        'transition-timing-function': 'cubic-bezier(0,0,0.2,1)',
      },
      '.content-auto': {
        'content-visibility': 'auto',
      },
      '.custom-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '.purple-hover': {
        'border-color': theme('colors.blue-marguerite.100'),
        'border-style': 'solid',
        'border-width': '1px',
      },
    });
  }),
];
