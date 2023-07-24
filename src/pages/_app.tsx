import type { AppProps } from 'next/app';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { createGlobalStyle } from 'styled-components';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }
`;

const lightTheme = createTheme({
  type: 'light',
});
const darkTheme = createTheme({
  type: 'dark',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
};
export default App;
