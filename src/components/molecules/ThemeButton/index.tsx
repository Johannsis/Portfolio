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
    <button className="flex items-center" onClick={toggleTheme}>
      {isDark ? (
        <Icon
          className="fill-current text-black dark:text-white"
          iconName="sun"
          size={28}
        />
      ) : (
        <Icon
          className="fill-current text-black dark:text-white"
          iconName="moon"
          size={28}
        />
      )}
    </button>
  );
}

export default ThemeButton;
