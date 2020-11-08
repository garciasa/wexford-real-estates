import { ReactNode } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/core';

//import '../global.css';

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
