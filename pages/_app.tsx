import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/store/ThemeContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme=''>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
