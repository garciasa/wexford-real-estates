import { useColorMode } from '@chakra-ui/core';
import { ReactElement } from 'react';

import { BsHouse } from 'react-icons/bs';

interface Props {
  props?: Record<string, unknown>;
}
function Home({ props }: Props): ReactElement {
  const { colorMode } = useColorMode();
  return <BsHouse color={colorMode === 'light' ? '#2D3748' : '#fff'} {...props} />;
}

export default Home;
