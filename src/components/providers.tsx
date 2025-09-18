'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '~/libs/query';

export function Providers({ children }: React.PropsWithChildren) {
  const client = getQueryClient();

  return (
    <QueryClientProvider client={client}>
      {children}

      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
