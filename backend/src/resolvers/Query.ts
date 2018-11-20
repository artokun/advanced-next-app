export const Query = {
  items(parent, args, ctx) {
    // const items = await ctx.prisma.items()
    const items = [{ id: 1, title: 'tjos' }]

    return items
  }
}
