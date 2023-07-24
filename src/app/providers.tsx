import { ThemeProvider } from 'next-themes';
import React, { ReactElement } from 'react';

export function Providers({ children }: { children: ReactElement}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}