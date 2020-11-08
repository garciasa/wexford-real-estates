import React, { ReactNode } from 'react';
import App from '../components/App';
import Stats from '../components/Stats';
import Chart from '../components/Chart';
import { getDataChart, getLastHouses, getStats } from '../lib/api';

function Home({stats, last, chart}): ReactNode {
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Stats stats={stats} last={last} />      
      <Chart data={chart} />
    </App>
  );
}

export async function getServerSideProps(){
  const stats = await getStats();
  const last = await getLastHouses();
  const chart = await getDataChart();
  return {
    props: {
      stats,
      last: last.length,
      chart,
    }
  }
}

export default Home;
