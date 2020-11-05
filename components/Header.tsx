import { Box, Flex, useColorMode, IconButton, Input } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { BsMoon, BsSun, BsHouse } from 'react-icons/bs';

function Header(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: 'white', dark: 'gray.800' };
  return (
    <Box
      pos="fixed"
      as="header"
      top="0"
      zIndex="4"
      left="0"
      bg={bg[colorMode]}
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4rem"
    >
      <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
        <Flex size="100%" p={[0, 3]} pl={[0, 3]} align="center" justify="space-between">
          <Box>
            <Flex>
              <BsHouse size={24} />
            </Flex>
          </Box>
          <Input
            display={['none', null, 'block']}
            width="100%"
            ml={32}
            mr={32}
            type="text"
            placeholder={`Search for Houses `}
            bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
          />
          <Flex align="center" color="gray.500">
            <IconButton
              aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <BsMoon /> : <BsSun style={{ color: 'white' }} />}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
