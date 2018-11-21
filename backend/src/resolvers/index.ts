import { Resolvers } from '../generated/graphqlgen'

import { Query } from './Query'
import { Mutation } from './Mutation'
import { User } from './User'
import { Item } from './Item'

export const resolvers: Resolvers = {
  Mutation,
  Query,
  User,
  Item
}
