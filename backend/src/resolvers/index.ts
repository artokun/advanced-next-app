import { Resolvers } from '../generated/graphqlgen'

import { User } from './User'
import { Item } from './Item'

export const resolvers: Resolvers = {
  User,
  Item
}
