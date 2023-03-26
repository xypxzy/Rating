import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top</title>
        <link rel='icon' href='/favicon.ico' />;
      </Head>
      <Component {...pageProps} />
    </>
  );
}
