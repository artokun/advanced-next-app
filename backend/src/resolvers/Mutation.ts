import { MutationResolvers } from '../generated/graphqlgen'

export const Mutation: MutationResolvers.Type = {
  createItem: (parent, args, ctx) => {
    return ctx.db.createPost({ ...args })
  }
}
