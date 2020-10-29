import { ReactNode } from 'react';
import Card from './components/Card';
import Tag from './components/Tag';

function Home(): ReactNode {
  return (
    <div className="flex flex-col space-y-4 m-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Card>
        {{
          media:
            'https://b.dmlimg.com/N2E5MjBmOTY3NDYxZDIwMGRhNzhkYjgzMTJhODgxNDfSLgH2BzLUcilUt8U9hYfTaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYy8wL2MwN2ZhZTE3YjZjMDc2MWZlZTdhMjA1YjU1NWJhZGUzLmpwZ3x8fHx8fDEwNDV4NjAwfHx8fA==.jpg',
          title: 'bla bla bla',
          content: (
            <>
              Lorem ipsum d3-holly-walk-cromwells-fort-grove-mulgannon-wexfordolor sit amet, consectetur adipisicing
              elit. Voluptatibus quia, ulla! Maiores et perferendis eaque, exercitationem praesentium nihiiiil.
            </>
          ),
          tags: (
            <>
              <Tag bgColor="bg-green-500" color="text-white">
                275,000 &euro;
              </Tag>
              <Tag>3 beds</Tag>
              <Tag size="text-xs">29/02/2010</Tag>
              <Tag size="text-xs">kenhoe</Tag>
            </>
          ),
        }}
      </Card>
      <Card>
        {{
          media:
            'https://b.dmlimg.com/MmQ5ZDYwNDllNGQzNjFjMjU3ZmUzZTY5NTU4N2U2NzJ8iyyh7GPalc8sHjywGnT1aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvNy9lLzdlODk3MDIwMGNiMGE2NTc0MzBmOGYxYWVkYTQwZmVmLmpwZ3x8fHx8fDc5MHg0NzB8fHx8.jpg',
          title: 'bla bla bla',
          content: (
            <>
              Lorem ipsum d3-holly-walk-cromwells-fort-grove-mulgannon-wexfordolor sit amet, consectetur adipisicing
              elit. Voluptatibus quia, ulla! Maiores et perferendis eaque, exercitationem praesentium nihiiiil.
            </>
          ),
          tags: (
            <>
              <Tag bgColor="bg-red-600" color="text-white">
                375,000 &euro;
              </Tag>
              <Tag>3 beds</Tag>
              <Tag size="text-xs">29/02/2010</Tag>
              <Tag size="text-xs">daft.ie</Tag>
            </>
          ),
        }}
      </Card>
    </div>
  );
}

export default Home;
