import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dhrupesh Brahmbhatt - Full Stack Developer',
  description:
    'Portfolio of Dhrupesh Brahmbhatt, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications with exceptional user experiences.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript',
    'Web Development',
    'Software Engineer',
    'Dhrupesh Brahmbhatt',
    'Gujarat Developer',
    'JavaScript Developer',
  ],
  authors: [{ name: 'Dhrupesh Brahmbhatt' }],
  creator: 'Dhrupesh Brahmbhatt',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhrupeshbrahmbhatt.dev',
    title: 'Dhrupesh Brahmbhatt - Full Stack Developer',
    description:
      'Portfolio of Dhrupesh Brahmbhatt, a Full Stack Developer specializing in modern web technologies.',
    siteName: 'Dhrupesh Brahmbhatt Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhrupesh Brahmbhatt - Full Stack Developer',
    description:
      'Portfolio of Dhrupesh Brahmbhatt, a Full Stack Developer specializing in modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
