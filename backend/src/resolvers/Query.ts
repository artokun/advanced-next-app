import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  items: (parent, args, ctx) => ctx.db.items(),
}