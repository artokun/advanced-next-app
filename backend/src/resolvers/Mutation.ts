import { MutationResolvers } from '../generated/graphqlgen'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  updateName: (parent, { id, name }, ctx) => {
    return ctx.db.updateUser({ where: { id }, data: { name } })
  }
}
