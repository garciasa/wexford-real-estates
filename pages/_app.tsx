import { ReactNode } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

//import '../global.css';

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
