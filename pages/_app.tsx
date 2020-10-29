import { ReactNode } from 'react';
import { AppProps } from 'next/app';

import '../global.css';

function App({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default App;
