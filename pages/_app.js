import { ApolloProvider } from '@apollo/client'
import { AdminProvider } from '../src/provider/admin.provider';
import client from '../apollo-client';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AdminProvider>
        <Component {...pageProps} />
      </AdminProvider>
    </ApolloProvider>
  );

}

export default MyApp
