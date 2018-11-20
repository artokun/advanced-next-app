// This file connects to the remote prisma DB and lets us query it

import { Prisma } from 'prisma-binding'

export const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})
