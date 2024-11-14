import type { Metadata } from 'next';
import Head from 'next/head';

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
      className={`${montserrat.variable} antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <Head>
        <link href="./output.css" rel="stylesheet"></link>
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
