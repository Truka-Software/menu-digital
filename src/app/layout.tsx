import './globals.css';
import { Inter } from 'next/font/google';

import { ReduxProvider } from '@/redux/ReduxProvider';
import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `Create Next App`,
  description: `Generated by create next app`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-512x512.png" />
        </head>
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
