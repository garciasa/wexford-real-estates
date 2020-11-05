import React, { ReactElement, ReactNode } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import Head from 'next/head';
import Header from './Header';
import SideNav from './SideNav';

interface Props {
  children: ReactNode;
  [x: string]: unknown;
}

function App({ children, ...rest }: Props): ReactElement {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Selling houses in Wexford</title>
      </Head>
      <Header />
      <Box>
        <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />
        <Box pl={[0, null, '18rem']} mt="4rem">
          <Box
            as="section"
            backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
            minHeight="calc(100vh - 4rem)"
          >
            <Box {...rest}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
