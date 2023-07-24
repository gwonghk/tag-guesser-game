import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactElement } from 'react';

export function Providers({ children }: { children: ReactElement }) {
  return <NextThemesProvider defaultTheme="dark">{children}</NextThemesProvider>;
}
