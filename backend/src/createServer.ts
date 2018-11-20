import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import * as resolvers from './resolvers'
// import { db } from './db'

// Create the GraphQL Yoga Server

export const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    // resolverValidationOptions: {
    //   requireResolversForResolveType: false
    // },
    context: { prisma }
  })
