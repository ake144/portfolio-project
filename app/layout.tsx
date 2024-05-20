import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akanji-dev.vercel.app"),
  keywords: ["aklilu Tamirat personal site", 'nextjs portfolio site', 'personal site', 'nextjs portfolio'],
  title: {
    default: 'Aklilu Tamirat',
    template: `%s | akanji personal site`
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    description: 'hey this is aklilu personal site built by Nextjs and tailwind',
    images: [
      {
        url: '/images/do.jpg',
        width: 1200,
        height: 630,
        alt: 'Aklilu tamirat personal site',
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.openGraph?.description ?? ''} />
      </Head>
      <html lang="en" suppressHydrationWarning />
      <body className={`${inter.className} ${roboto_mono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </>
  );
}
