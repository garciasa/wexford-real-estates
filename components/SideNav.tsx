import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { useColorMode, Box, Flex, Stack, Text } from '@chakra-ui/core';
import { BsHouse, BsNewspaper, BsArchive } from 'react-icons/bs';

interface Props {
  [x: string]: unknown;
}

function SideNav({ ...props }: Props): ReactElement {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="0"
      right="0"
      {...props}
    >
      <Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px">
        <Box>
          <Flex justify="space-between" direction="column" height="calc(100vh - 4rem)" fontSize="sm" p="6">
            <Stack spacing={0} mb={8}>
              <Flex align="center" p={1}>
                <BsHouse color={colorMode === 'light' ? '#2D3748' : '#fff'} />
                <Text ml={3} fontWeight="bold">
                  <NextLink href="/">
                    <a>Dashboard</a>
                  </NextLink>
                </Text>
              </Flex>
              <Flex align="center" p={1}>
                <BsNewspaper color={colorMode === 'light' ? '#2D3748' : '#fff'} />
                <Text ml={3} fontWeight="bold">
                  <NextLink href="/last">Last</NextLink>
                </Text>
              </Flex>
              <Flex align="center" p={1}>
                <BsArchive color={colorMode === 'light' ? '#2D3748' : '#fff'} />
                <Text ml={3} fontWeight="bold">
                  <NextLink href="/all">All</NextLink>
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default SideNav;
