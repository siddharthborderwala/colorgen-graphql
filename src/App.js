import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import Layout from './components/Layout';

/**
 * Websocket link for apollo client
 * need to use web-sockets here for enabling subscriptions
 */
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SERVER_WSL,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-access-key': process.env.REACT_APP_ADMIN_SECRET,
      },
    },
  },
});

/**
 * Apollo Client for graphql functionality
 */
const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache({
    typePolicies: {
      Subscription: {
        fields: {
          colors: {
            merge: (initial, final) => final,
          },
        },
      },
    },
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
}
