// bug import gak bisa langsung dari modul, harus  dari @apollo

// import { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloClient } from "apollo-client";
//import { HttpLink } from "apollo-link-http";

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";

const httpUri = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: httpUri,
});

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache: inMemoryCache,
});
