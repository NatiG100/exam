import { ApolloProvider } from '@apollo/client'
import { FilterProvider } from './../src/provider/filter.provider';
import client from '../apollo-client';
import '../styles/globals.css'
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FilterProvider>
    </ApolloProvider>
  );

}

export default MyApp
