import { Resolvers } from '../generated/graphqlgen'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Item } from './Item'
import { User } from './User'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Item,
  User
}