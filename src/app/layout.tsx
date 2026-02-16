import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { siteConfig } from '@/data/portfolio';
import './globals.css';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: [
    'Cloud Architect',
    'AI Strategist',
    'MLOps',
    'AWS',
    'Kubernetes',
    'Principal Engineer',
    'Engineering Leader',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Outfit:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {/* Background Effects - Light Mode */}
            <div className="dark:hidden light-orbs" aria-hidden="true" />
            <div className="dark:hidden light-grid" aria-hidden="true" />

            {/* Background Effects - Dark Mode */}
            <div className="hidden dark:block dark-stars" aria-hidden="true" />
            <div className="hidden dark:block dark-nebula" aria-hidden="true" />
            <div className="hidden dark:block dark-grid" aria-hidden="true" />

            {/* Noise overlay - both modes */}
            <div className="noise-overlay" aria-hidden="true" />

            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
