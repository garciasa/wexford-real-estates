import React, { ReactNode } from 'react';
import App from '../components/App';
import Stats from '../components/Stats';
import Chart from '../components/Chart';

function Home(): ReactNode {
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Stats />
      <Chart />
    </App>
  );
}

export default Home;
