import type { Metadata } from 'next';

import { ThemeProvider } from '@jh/library/themeProvider';
import { montserrat } from '@jh/styles/fonts/montserrat';

import '../styles/global.css';

export const metadata: Metadata = {
  description: 'Johannes Hoersch Portfolio',
  title: 'Johannes Hoersch Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      className={`${montserrat.variable} scroll-smooth`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="m-0 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
