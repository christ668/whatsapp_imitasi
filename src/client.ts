// bug import gak bisa langsung dari modul, harus  dari @apollo

// import  { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloClient } from "apollo-client";
// import { HttpLink } from "apollo-link-http";

import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import {
  ApolloClient,
  InMemoryCache,
  //NormalizedCacheObject,
  HttpLink,
  //ApolloLink,
  //split,
} from "@apollo/client";

const httpUri = "http://localhost:4000/graphql";
const wsUri = httpUri.replace(/^https?/, "ws");

const httpLink = new HttpLink({
  uri: httpUri,
});

const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    // Automatic reconnect in case of connection error
    reconnect: true,
  },
});

/**
 * Fix error typing in `split` method in `apollo-link`
 * Related issue https://github.com/apollographql/apollo-client/issues/3090
 */
export interface Definition {
  kind: string;
  operation?: string;
}
const terminatingLink = split(({ query }) => {
  const { kind, operation }: Definition = getMainDefinition(query);
  // If this is a subscription query, use wsLink, otherwise use httpLink
  return kind === "OperationDefinition" && operation === "subscription";
}, wsLink);

const link = ApolloLink.from([terminatingLink]);

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache: inMemoryCache,
});
