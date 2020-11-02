import { ReactElement, ReactNode } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Card from '../components/Card';
import Tag from '../components/Tag';
import Header from '../components/Header';
import getAllHouses from '../lib/api';
import { House } from '../model/interfaces';
import SideNav from '../components/SideNav';

function Home_old(): ReactNode {
  const { isLoading, error, data } = useQuery<House[], any>('allHouses', getAllHouses);

  return (
    <div className="grid gap-4 grid-cols-1 m-4 lg:grid-cols-4">
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.slice(0, 150).map((h) => (
            <Card key={h.id}>
              {{
                media: h.photo,
                title: h.title,
                url: h.url,
                tags: (
                  <>
                    <Tag bgColor="bg-green-500" color="text-white">
                      {h.price}
                    </Tag>
                    <Tag>{h.beds} beds</Tag>
                    <Tag size="text-xs">{format(new Date(h.date_renewed), 'dd/MM/yyyy')}</Tag>
                    <Tag size="text-xs">{h.provider}</Tag>
                  </>
                ),
              }}
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

interface Props {
  children: ReactElement;
  rest: Record<string, unknown>;
}

function Home({ children, ...rest }: Props): ReactNode {
  const { colorMode } = useColorMode();
  return (
    <>
      <Header />
      <Box>
        <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />
        <Box pl={[0, null, '18rem']} mt="4rem">
          <Box
            as="section"
            backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
            minHeight="calc(100vh - 4rem)"
          >
            <Box {...rest}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
