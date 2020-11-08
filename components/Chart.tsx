import { Flex, Text } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {StatChart} from '../model/interfaces'
interface Props {
  data: StatChart[]
}

function Chart({data}:Props): ReactElement {
  const filtered_data = data.filter(y => y.year === 2020);
  return (
    <Flex
      size="100%"
      p={[0, 3]}
      pl={[0, 3]}
      mt={10}
      align="center"
      justify="space-around"
      direction="column"
      
    >
      <Text mb={2} fontWeight="bold">
        {'Published Houses 4 beds (myhome.ie)'}
      </Text>
      <ResponsiveContainer width={'99%'} height={300}>
        <LineChart data={filtered_data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="houses" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="month_str" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </Flex>
  );
}

export default Chart;
