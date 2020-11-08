import React, { ReactNode } from 'react';
import { Flex, Text, Spinner } from '@chakra-ui/core';
import { useQuery } from 'react-query';
import App from '../components/App';
import HouseCard from '../components/HouseCard';
import { getAllHouses } from '../lib/api';
import { House } from '../model/interfaces';

function AllHouses(): ReactNode {
  const { isLoading, error, data } = useQuery<House[], unknown>('allHouses', getAllHouses);
  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Text mb={2} fontWeight="bold">
        {'All Published'}
      </Text>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Flex pt={24} align="center" justify="center">
          <Spinner size="xl" label="Loading Deals" />
        </Flex>
      ) : (
        <>
          {data.map((h) => (
            <HouseCard
              key={h.id}
              title={h.title}
              image={h.photo}
              url={h.url}
              price={h.price}
              baths={h.baths}
              beds={h.beds}
              provider={h.provider}
              date_renewed={h.date_renewed}
            />
          ))}

          <Flex justify="flex-end" as="i" color="gray.500">
            {`Showing ${data.splice(0, 10).length} out of ${data.length} houses `}
          </Flex>
        </>
      )}
    </App>
  );
}

export default AllHouses;
