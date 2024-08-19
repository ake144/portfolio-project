import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import BottomNav from '@/components/bottom';
import { TooltipProvider } from '@/components/ui/tooltip';

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
    ],
  },
  robots:{
    index: true,
    follow: true,
    googleBot:{
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
    'max-image-preview': 'large'

    }
  }
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
           <TooltipProvider delayDuration={0}>
          {children}
          <div  className='fixed bottom-0 left-50% z-10'>
          <BottomNav  />
          </div>

          </TooltipProvider>
        </ThemeProvider>
        <Analytics  />
      </body>
    </>
  );
}
