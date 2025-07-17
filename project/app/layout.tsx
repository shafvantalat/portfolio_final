import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammed Shafvan - Full-Stack Developer',
  description: 'Portfolio of Muhammed Shafvan, a passionate Full-Stack Developer building efficient bots and APIs for the future.',
  keywords: 'developer, full-stack, bot development, web development, Next.js, React, Node.js, Python',
  authors: [{ name: 'Muhammed Shafvan' }],
  openGraph: {
    title: 'Muhammed Shafvan - Full-Stack Developer',
    description: 'Portfolio of Muhammed Shafvan, a passionate Full-Stack Developer building efficient bots and APIs for the future.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}