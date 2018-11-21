import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { Request } from 'express'

// Create the GraphQL Yoga Server

export const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context: (req: Request) => ({ ...req, db: prisma })
  } as any)
