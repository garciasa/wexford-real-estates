import React, { ReactNode } from 'react';
import App from '../components/App';
import Stats from '../components/Stats';
import Chart from '../components/Chart';
import { getLastHouses, getStats } from '../lib/api';

function Home({stats, last}): ReactNode {
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Stats stats={stats} last={last} />
      <Chart />
    </App>
  );
}

export async function getStaticProps(){
  const stats = await getStats();
  const last = await getLastHouses();
  return {
    props: {
      stats,
      last: last.length
    },
    revalidate: 60,
  }
}

export default Home;
