'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '@/components/Layout';
import LoadingSpinner from '@/components/LoadingSpinner';
import ScrollToTop from '@/components/ScrollToTop';
import { useInitialLoading } from '@/hooks/usePageLoading';

export function Providers({ children }: { children: React.ReactNode }) {
  const { isLoading } = useInitialLoading();

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ScrollToTop />
          <Layout>{children}</Layout>
        </>
      )}
    </ThemeProvider>
  );
}
