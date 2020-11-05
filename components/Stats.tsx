import { Flex } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { getStats } from '../lib/api';
import { Stat } from '../model/interfaces';
import StatsBox from './StatsBox';

function Stats(): ReactElement {
  const { isLoading, error, data } = useQuery<Stat[], unknown>('Stats', getStats);
  return (
    <Flex
      direction={['column', 'column', 'row']}
      size="100%"
      p={[0, 3]}
      pl={[0, 3]}
      align="center"
      justify="space-around"
    >
      <StatsBox main={3} footer="Added last 7 days" />
      <StatsBox main={123} footer="Total" />
      <StatsBox main={'12:54'} label="05/11/2020" footer="Last Parsed" />
    </Flex>
  );
}

export default Stats;
