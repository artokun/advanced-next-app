export const Query = {
  async items(parent, args, ctx) {
    const items = await ctx.prisma.items()

    return items
  }
}
