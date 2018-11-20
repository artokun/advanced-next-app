export const Mutation = {
  createItem(parent, args, context) {
    // TODO: Check if authed

    return context.prisma.createItem({ data: { ...args } })
  }
}
