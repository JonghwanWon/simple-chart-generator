import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { ComponentProps } from 'react';

import 'chart.js/auto';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const nProgressConfigs: ComponentProps<typeof NextNProgress> = {
    color: '#29D',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
    showOnShallow: true,
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <ChakraProvider resetCSS>
        <NextNProgress {...nProgressConfigs} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
