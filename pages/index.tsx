import { ReactNode } from 'react';
import { Text } from '@chakra-ui/core';
import App from '../components/App';

function Home(): ReactNode {
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Text>Dashboard here</Text>
    </App>
  );
}

export default Home;
