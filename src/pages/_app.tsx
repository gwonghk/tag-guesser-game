import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider } from '@nextui-org/react';
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

const App = ({ Component, pageProps }: AppProps) => {
    return <>
    <GlobalStyle />
    <ThemeProvider>
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <Component  {...pageProps} />
            </QueryClientProvider>
        </NextUIProvider>;
    </ThemeProvider>;
    </>;
};
export default App;