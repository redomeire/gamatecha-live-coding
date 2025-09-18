import type { Metadata } from 'next';
import { Providers } from '~/components/providers';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Gamatecha',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
