import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://afaq-alzahbia-api.techawks.io/graphql",
    cache: new InMemoryCache(),
});

export default client;