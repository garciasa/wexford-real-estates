import { Box, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, useColorMode } from '@chakra-ui/core';
import React, { ReactElement } from 'react';

interface Props {
  main: string | number | Date;
  label?: string;
  footer: string;
}

function StatsBox({ main, footer, label }: Props): ReactElement {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="175px"
      h="150px"
      borderWidth="1px"
      borderRadius={8}
      p={4}
      mb={2}
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
    >
      <Stat textAlign="center">
        {label && <StatLabel>{label}</StatLabel>}
        <StatNumber fontSize="5xl">{main}</StatNumber>
        <StatHelpText>{footer}</StatHelpText>
      </Stat>
    </Box>
  );
}

export default StatsBox;
