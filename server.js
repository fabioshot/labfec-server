import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './src/graphql/schema';
import resolvers from './src/graphql/resolvers';
import db from './src/models';

const server = new ApolloServer({ 
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db}  
 });

const app = express();
const path = '/labfec';

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)