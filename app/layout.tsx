import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TwistUp Brand System',
  description: 'Clean, refreshing, confident brand identity for TwistUp.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
