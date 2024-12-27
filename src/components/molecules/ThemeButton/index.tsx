'use client';

import { useCallback } from 'react';

import { useTheme } from 'next-themes';

import { Icon } from '@jh/icons';

function ThemeButton(): React.ReactElement {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';
  const toggleTheme = useCallback((): void => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return (
    <button
      className="fixed right-4 top-4 z-20 items-center"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Icon
          className="fill-current text-primary-100 dark:text-secondary-50"
          iconName="sun"
          size={28}
        />
      ) : (
        <Icon
          className="fill-current text-primary-100 dark:text-secondary-50"
          iconName="moon"
          size={28}
        />
      )}
    </button>
  );
}

export default ThemeButton;
