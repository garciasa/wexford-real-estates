import React, { ReactNode } from 'react';
import App from '../components/App';
import Chart from '../components/Chart';
import { getDataChart, getLastHouses, getStats } from '../lib/api';
import { useQuery } from 'react-query';
import { House, StatChart, StatsApi } from '../model/interfaces';
import Stats from '../components/Stats';
import { Flex, Spinner } from '@chakra-ui/core';

function Home(): ReactNode {
  const { isLoading: isLoadingStats, error: errorStats, data: dataStats } = useQuery<StatsApi, unknown>(
    'Stats',
    getStats,
  );
  const { isLoading: isLoadingLast, error: errorLast, data: dataLast } = useQuery<House[], unknown>(
    'Last',
    getLastHouses,
  );
  const { isLoading: isLoadingChart, error: errorChart, data: dataChart } = useQuery<StatChart[], unknown>(
    'Chart',
    getDataChart,
  );
  const isloading = isLoadingChart || isLoadingLast || isLoadingStats;
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      {isloading ? (
        <Flex pt={24} align="center" justify="center">
          <Spinner size="xl" label="Loading Deals" />
        </Flex>
      ) : (
        <>
          <Stats stats={dataStats} last={dataLast.length} />
          <Chart data={dataChart} />
        </>
      )}
    </App>
  );
}

export default Home;
