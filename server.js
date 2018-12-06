import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import db from './src/models';


const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/graphql/types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/graphql/resolvers')));


const server = new ApolloServer({ 
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }  
 });

const app = express();

server.applyMiddleware({ app });

db.sequelize.sync().then( () => {
  app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
});
