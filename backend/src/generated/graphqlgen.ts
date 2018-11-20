// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Item } from "./prisma-client";
type Context = any;

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    id: string;
  }

  export type UserResolver = (
    parent: undefined,
    args: ArgsUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export interface Type {
    user: (
      parent: undefined,
      args: ArgsUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateItem {
    title: string | null;
    description: string | null;
    price: number | null;
    image: string | null;
    largeImage: string | null;
  }

  export type CreateItemResolver = (
    parent: undefined,
    args: ArgsCreateItem,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Item | null | Promise<Item | null>;

  export interface Type {
    createItem: (
      parent: undefined,
      args: ArgsCreateItem,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Item | null | Promise<Item | null>;
  }
}

export namespace ItemResolvers {
  export const defaultResolvers = {
    id: (parent: Item) => parent.id,
    title: (parent: Item) => parent.title,
    description: (parent: Item) => parent.description,
    image: (parent: Item) => (parent.image === undefined ? null : parent.image),
    largeImage: (parent: Item) =>
      parent.largeImage === undefined ? null : parent.largeImage,
    price: (parent: Item) => parent.price,
    createdAt: (parent: Item) => parent.createdAt,
    upadtedAt: (parent: Item) => parent.upadtedAt
  };

  export type IdResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DescriptionResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ImageResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type LargeImageResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type PriceResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CreatedAtResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpadtedAtResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    title: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    description: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    image: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    largeImage: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    price: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    createdAt: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    upadtedAt: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  Item: ItemResolvers.Type;
}
