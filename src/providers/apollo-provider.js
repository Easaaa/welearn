import React from "react"
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "apollo-link-context"
import { onError } from "apollo-link-error"
import fetch from "isomorphic-fetch"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const userLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const uid = localStorage.getItem("userUid")
  const role = localStorage.getItem("userRole")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: uid,
      role,
    },
  }
})

const httpLink = new HttpLink({
  fetch,
  uri: "https://pokerify-backend.herokuapp.com/",
  // uri: "http://localhost:4000/",
})

// http://localhost:4000/
// https://pokerify-backend.herokuapp.com/graphql

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(userLink.concat(httpLink)),
})

export const WrapperApolloProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
