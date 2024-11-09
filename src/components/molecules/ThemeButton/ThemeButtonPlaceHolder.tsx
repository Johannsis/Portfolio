'use client';

import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

const ThemeButton = dynamic(
  async (): Promise<{ default: ComponentType }> => ({
    default: (await import('.')).default,
  }),
  {
    loading: (): React.ReactElement => (
      <div className="h-8 w-8 animate-pulse bg-primary-50" />
    ),
    ssr: false,
  },
);

function ThemeButtonPlaceholder(): React.ReactElement {
  return <ThemeButton />;
}

export default ThemeButtonPlaceholder;
