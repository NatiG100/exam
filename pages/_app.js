import { ApolloProvider } from '@apollo/client'
import { CounterProvider } from '../src/provider/counter.provider';
import client from '../apollo-client';
import '../styles/globals.css'
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CounterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CounterProvider>
    </ApolloProvider>
  );

}

export default MyApp
