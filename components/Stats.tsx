import { Flex } from '@chakra-ui/core';
import { format } from 'date-fns';
import React, { ReactElement } from 'react';
import { StatsApi } from '../model/interfaces';
import StatsBox from './StatsBox';

interface Props {
  stats: StatsApi;
  last: number;
}

function Stats({ stats, last }: Props): ReactElement {
  console.log(stats);
  const parsed = new Date(stats.crawler[0].end_date);
  return (
    <Flex
      direction={['column', 'column', 'row']}
      size="100%"
      p={[0, 3]}
      pl={[0, 3]}
      align="center"
      justify="space-around"
    >
      <StatsBox main={last} footer="Added last 7 days" />
      <StatsBox main={stats.general.total} footer="Total" />
      <StatsBox main={format(parsed, 'HH:mm')} label={format(parsed, 'dd/MM/yy')} footer="Last Parsed" />
    </Flex>
  );
}

export default Stats;
