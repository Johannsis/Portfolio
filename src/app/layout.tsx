import 'server-only';

import type { Metadata } from 'next';

import { isProd } from '@jh/flags/environment';
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
  const isProduction = isProd();

  return (
    <html
      className={`${montserrat.variable} scroll-smooth`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/images/favicon.ico" rel="shortcut icon" />
        <link
          href={
            isProduction
              ? '/portfolio/images/apple-touch-icon.png'
              : '/images/apple-touch-icon.png'
          }
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href={
            isProduction
              ? '/portfolio/images/favicon-32x32.png'
              : '/images/favicon-32x32.png'
          }
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href={
            isProduction
              ? '/portfolio/images/favicon-16x16.png'
              : '/images/favicon-16x16.png'
          }
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta
          content="Software Engineer, Front-End Developer"
          name="keywords"
        />
      </head>
      <body className="m-0 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
