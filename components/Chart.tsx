import { Flex, Text, Select } from '@chakra-ui/core';
import React, { ReactElement, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatChart } from '../model/interfaces';
interface Props {
  data: StatChart[];
}

function Chart({ data }: Props): ReactElement {
  const actualYear = new Date().getFullYear();
  const [year, setYear] = useState(2022);
  const uniqueYears = Array.from(new Set(data.map((y) => y.year)));
  const filtered_data = data.filter((y) => y.year === year);
  return (
    <Flex size="100%" p={[0, 3]} pl={[0, 3]} mt={10} align="center" justify="space-around" direction="column">
      <Flex align="center" justify="space-around" mb={5}>
        <Text w="200px" mb={2} fontWeight="bold">
          {'Published Houses 4 beds (myhome.ie)'}
        </Text>
        <Select onChange={(e) => setYear(parseInt(e.target.value))} w="40%" defaultValue={actualYear}>
          {uniqueYears.slice(-3).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Flex>
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
