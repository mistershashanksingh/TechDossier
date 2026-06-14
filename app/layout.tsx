import type { Metadata } from 'next';
import { Baumans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const baumans = Baumans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-baumans',
});

export const metadata: Metadata = {
  title: 'Portfolio - DevOps & MLOps Engineer',
  description:
    'Portfolio of a DevOps & MLOps engineer passionate about DevOps, MLOps, AI/ML, and Quantum ML.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${baumans.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
