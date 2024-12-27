import type { Metadata } from 'next';

import { ThemeProvider } from '@jh/library/themeProvider';
import { montserrat } from '@jh/styles/fonts/montserrat';

import '../styles/global.css';

export const metadata: Metadata = {
  description: 'Johannes Hoersch Portfolio',
  title: 'Johannes Hoersch Portfolio',
};

const isProd = process.env.NODE_ENV === 'production';

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
      <head>
        <link href="/images/favicon.ico" rel="shortcut icon" />
        <link
          href={
            isProd
              ? '/portfolio/images/apple-touch-icon.png'
              : '/images/apple-touch-icon.png'
          }
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href={
            isProd
              ? '/portfolio/images/favicon-32x32.png'
              : '/images/favicon-32x32.png'
          }
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href={
            isProd
              ? '/portfolio/images/favicon-16x16.png'
              : '/images/favicon-16x16.png'
          }
          rel="icon"
          sizes="16x16"
          type="image/png"
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
