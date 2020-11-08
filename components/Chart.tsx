import { Flex, Text } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {StatChart} from '../model/interfaces'
const data = [{name: 'Ene', uv: 5, pv: 2400, amt: 2400},
              {name: 'Feb', uv: 4, pv: 2400, amt: 2400}];
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
      <LineChart width={600} height={300} data={filtered_data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="houses" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="month_str" />
        <YAxis />
      </LineChart> 
    </Flex>
  );
}

export default Chart;
