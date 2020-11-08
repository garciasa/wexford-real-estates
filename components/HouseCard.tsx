import { Box, Flex, Badge, Stack, AspectRatio, useColorMode, layout } from '@chakra-ui/core';
import { format } from 'date-fns';
import Image from 'next/image';
import React, { ReactElement } from 'react';
interface Props {
  title: string;
  image: string;
  url: string;
  price: string;
  baths: number;
  beds: number;
  provider: string;
  date_renewed: string
}

function HouseCard({ title, image, url, price, baths, beds, provider, date_renewed }: Props): ReactElement {
  const { colorMode } = useColorMode();
  return (
    <Box borderWidth="1px" borderRadius={8} p={1} mb={2} backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}>
      <Flex>
        <AspectRatio w="100%" maxWidth="120px" ratio={1}>          
            <Image src={image} alt={`Image of ${title}`} unsized />          
        </AspectRatio>
        <Stack ml={3} mt={2} mb={2}>
          <Flex align="baseline">
            <Badge fontSize="1em">{price}</Badge>
              <Badge ml={2} variant="subtle" colorScheme="purple">
                {format(new Date(date_renewed), "dd/MM/yy")}          
              </Badge>
          </Flex>
          <Box fontSize="xl" fontWeight="semibold" lineHeight="short">
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </Box>
          <Flex align="center">
            <Badge colorScheme="green" textTransform="lowercase">
              {beds} beds
            </Badge>
            {baths !== 0 && (
              <Badge ml={2} colorScheme="blue" textTransform="lowercase">
                {baths} baths
              </Badge>
            )}
            <Badge ml={2} variant="outline">
              {provider}
            </Badge>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default HouseCard;
