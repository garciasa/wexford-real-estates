import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Card from '../components/Card';
import Tag from '../components/Tag';
import Header from '../components/Header';

interface House {
  id: string;
  url: string;
  price: string;
  title: string;
  beds: number;
  baths: number;
  provider: string;
  eircode: string;
  date_renewed: string;
  first_listed: string;
  property_id: string;
  photo: string;
}

function Home_old(): ReactNode {
  const { isLoading, error, data } = useQuery<House[], any>('fetchAllHouses', () =>
    fetch('https://housecrawler.azurewebsites.net/api/v1/houses').then((resp) => resp.json()),
  );

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

function Home(): ReactNode {
  return <Header />;
}

export default Home;
