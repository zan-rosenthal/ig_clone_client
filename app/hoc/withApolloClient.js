import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import React from 'react'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default function withApolloClient(Component) {
  return (props) => (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  )
}