import { prisma } from '../src/generated/prisma-client'

async function main() {
  await prisma.createUser({
    name: 'Alice',
    email: 'alice@prisma.io',
  })
}