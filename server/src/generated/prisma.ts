import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foods: <T = Food[]>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    drinks: <T = Drink[]>(args: { where?: DrinkWhereInput, orderBy?: DrinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foodsConnection: <T = FoodConnection>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    drinksConnection: <T = DrinkConnection>(args: { where?: DrinkWhereInput, orderBy?: DrinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFood: <T = Food>(args: { data: FoodCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDrink: <T = Drink>(args: { data: DrinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoods: <T = BatchPayload>(args: { data: FoodUpdateInput, where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDrinks: <T = BatchPayload>(args: { data: DrinkUpdateInput, where?: DrinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoods: <T = BatchPayload>(args: { where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDrinks: <T = BatchPayload>(args: { where?: DrinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    food: <T = FoodSubscriptionPayload | null>(args: { where?: FoodSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    drink: <T = DrinkSubscriptionPayload | null>(args: { where?: DrinkSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Food: (where?: FoodWhereInput) => Promise<boolean>
  Drink: (where?: DrinkWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateDrink {
  count: Int!
}

type AggregateFood {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

enum Cuisine {
  ITALIAN
  ASIAN
  INDIAN
  MISCELLANEOUS
  LOCAL
  VEGAN
  VEGETARIAN
  MEDITERRANEAN
  MEXICAN
  AMERICAN
}

type Drink {
  name: String!
  location: String
  hours: String
  tags: [Tag!]!
}

"""A connection to a list of items."""
type DrinkConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DrinkEdge]!
  aggregate: AggregateDrink!
}

input DrinkCreateInput {
  name: String!
  location: String
  hours: String
  tags: DrinkCreatetagsInput
}

input DrinkCreatetagsInput {
  set: [Tag!]
}

"""An edge in a connection."""
type DrinkEdge {
  """The item at the end of the edge."""
  node: Drink!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DrinkOrderByInput {
  name_ASC
  name_DESC
  location_ASC
  location_DESC
  hours_ASC
  hours_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DrinkPreviousValues {
  name: String!
  location: String
  hours: String
  tags: [Tag!]!
}

type DrinkSubscriptionPayload {
  mutation: MutationType!
  node: Drink
  updatedFields: [String!]
  previousValues: DrinkPreviousValues
}

input DrinkSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DrinkSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DrinkSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DrinkSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DrinkWhereInput
}

input DrinkUpdateInput {
  name: String
  location: String
  hours: String
  tags: DrinkUpdatetagsInput
}

input DrinkUpdatetagsInput {
  set: [Tag!]
}

input DrinkWhereInput {
  """Logical AND on all given filters."""
  AND: [DrinkWhereInput!]

  """Logical OR on all given filters."""
  OR: [DrinkWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DrinkWhereInput!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  hours: String

  """All values that are not equal to given value."""
  hours_not: String

  """All values that are contained in given list."""
  hours_in: [String!]

  """All values that are not contained in given list."""
  hours_not_in: [String!]

  """All values less than the given value."""
  hours_lt: String

  """All values less than or equal the given value."""
  hours_lte: String

  """All values greater than the given value."""
  hours_gt: String

  """All values greater than or equal the given value."""
  hours_gte: String

  """All values containing the given string."""
  hours_contains: String

  """All values not containing the given string."""
  hours_not_contains: String

  """All values starting with the given string."""
  hours_starts_with: String

  """All values not starting with the given string."""
  hours_not_starts_with: String

  """All values ending with the given string."""
  hours_ends_with: String

  """All values not ending with the given string."""
  hours_not_ends_with: String
}

type Food {
  name: String!
  location: String
  cuisine: Cuisine
  hours: String
  tags: [Tag!]!
}

"""A connection to a list of items."""
type FoodConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  name: String!
  location: String
  cuisine: Cuisine
  hours: String
  tags: FoodCreatetagsInput
}

input FoodCreatetagsInput {
  set: [Tag!]
}

"""An edge in a connection."""
type FoodEdge {
  """The item at the end of the edge."""
  node: Food!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FoodOrderByInput {
  name_ASC
  name_DESC
  location_ASC
  location_DESC
  cuisine_ASC
  cuisine_DESC
  hours_ASC
  hours_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FoodPreviousValues {
  name: String!
  location: String
  cuisine: Cuisine
  hours: String
  tags: [Tag!]!
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
}

input FoodUpdateInput {
  name: String
  location: String
  cuisine: Cuisine
  hours: String
  tags: FoodUpdatetagsInput
}

input FoodUpdatetagsInput {
  set: [Tag!]
}

input FoodWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodWhereInput!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  cuisine: Cuisine

  """All values that are not equal to given value."""
  cuisine_not: Cuisine

  """All values that are contained in given list."""
  cuisine_in: [Cuisine!]

  """All values that are not contained in given list."""
  cuisine_not_in: [Cuisine!]
  hours: String

  """All values that are not equal to given value."""
  hours_not: String

  """All values that are contained in given list."""
  hours_in: [String!]

  """All values that are not contained in given list."""
  hours_not_in: [String!]

  """All values less than the given value."""
  hours_lt: String

  """All values less than or equal the given value."""
  hours_lte: String

  """All values greater than the given value."""
  hours_gt: String

  """All values greater than or equal the given value."""
  hours_gte: String

  """All values containing the given string."""
  hours_contains: String

  """All values not containing the given string."""
  hours_not_contains: String

  """All values starting with the given string."""
  hours_starts_with: String

  """All values not starting with the given string."""
  hours_not_starts_with: String

  """All values ending with the given string."""
  hours_ends_with: String

  """All values not ending with the given string."""
  hours_not_ends_with: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createFood(data: FoodCreateInput!): Food!
  createDrink(data: DrinkCreateInput!): Drink!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteUser(where: UserWhereUniqueInput!): User
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyFoods(data: FoodUpdateInput!, where: FoodWhereInput): BatchPayload!
  updateManyDrinks(data: DrinkUpdateInput!, where: DrinkWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
  deleteManyDrinks(where: DrinkWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  drinks(where: DrinkWhereInput, orderBy: DrinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Drink]!
  user(where: UserWhereUniqueInput!): User
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  drinksConnection(where: DrinkWhereInput, orderBy: DrinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DrinkConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
  drink(where: DrinkSubscriptionWhereInput): DrinkSubscriptionPayload
}

enum Tag {
  BREAKFAST
  LUNCH
  DINNER
  BRUNCH
  DESSERT
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Cuisine =   'ITALIAN' |
  'ASIAN' |
  'INDIAN' |
  'MISCELLANEOUS' |
  'LOCAL' |
  'VEGAN' |
  'VEGETARIAN' |
  'MEDITERRANEAN' |
  'MEXICAN' |
  'AMERICAN'

export type FoodOrderByInput =   'name_ASC' |
  'name_DESC' |
  'location_ASC' |
  'location_DESC' |
  'cuisine_ASC' |
  'cuisine_DESC' |
  'hours_ASC' |
  'hours_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Tag =   'BREAKFAST' |
  'LUNCH' |
  'DINNER' |
  'BRUNCH' |
  'DESSERT'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DrinkOrderByInput =   'name_ASC' |
  'name_DESC' |
  'location_ASC' |
  'location_DESC' |
  'hours_ASC' |
  'hours_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface DrinkUpdateInput {
  name?: String
  location?: String
  hours?: String
  tags?: DrinkUpdatetagsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
}

export interface FoodUpdatetagsInput {
  set?: Tag[] | Tag
}

export interface FoodWhereInput {
  AND?: FoodWhereInput[] | FoodWhereInput
  OR?: FoodWhereInput[] | FoodWhereInput
  NOT?: FoodWhereInput[] | FoodWhereInput
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  location?: String
  location_not?: String
  location_in?: String[] | String
  location_not_in?: String[] | String
  location_lt?: String
  location_lte?: String
  location_gt?: String
  location_gte?: String
  location_contains?: String
  location_not_contains?: String
  location_starts_with?: String
  location_not_starts_with?: String
  location_ends_with?: String
  location_not_ends_with?: String
  cuisine?: Cuisine
  cuisine_not?: Cuisine
  cuisine_in?: Cuisine[] | Cuisine
  cuisine_not_in?: Cuisine[] | Cuisine
  hours?: String
  hours_not?: String
  hours_in?: String[] | String
  hours_not_in?: String[] | String
  hours_lt?: String
  hours_lte?: String
  hours_gt?: String
  hours_gte?: String
  hours_contains?: String
  hours_not_contains?: String
  hours_starts_with?: String
  hours_not_starts_with?: String
  hours_ends_with?: String
  hours_not_ends_with?: String
}

export interface FoodUpdateInput {
  name?: String
  location?: String
  cuisine?: Cuisine
  hours?: String
  tags?: FoodUpdatetagsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface DrinkWhereInput {
  AND?: DrinkWhereInput[] | DrinkWhereInput
  OR?: DrinkWhereInput[] | DrinkWhereInput
  NOT?: DrinkWhereInput[] | DrinkWhereInput
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  location?: String
  location_not?: String
  location_in?: String[] | String
  location_not_in?: String[] | String
  location_lt?: String
  location_lte?: String
  location_gt?: String
  location_gte?: String
  location_contains?: String
  location_not_contains?: String
  location_starts_with?: String
  location_not_starts_with?: String
  location_ends_with?: String
  location_not_ends_with?: String
  hours?: String
  hours_not?: String
  hours_in?: String[] | String
  hours_not_in?: String[] | String
  hours_lt?: String
  hours_lte?: String
  hours_gt?: String
  hours_gte?: String
  hours_contains?: String
  hours_not_contains?: String
  hours_starts_with?: String
  hours_not_starts_with?: String
  hours_ends_with?: String
  hours_not_ends_with?: String
}

export interface DrinkUpdatetagsInput {
  set?: Tag[] | Tag
}

export interface FoodCreateInput {
  name: String
  location?: String
  cuisine?: Cuisine
  hours?: String
  tags?: FoodCreatetagsInput
}

export interface FoodCreatetagsInput {
  set?: Tag[] | Tag
}

export interface DrinkCreateInput {
  name: String
  location?: String
  hours?: String
  tags?: DrinkCreatetagsInput
}

export interface DrinkCreatetagsInput {
  set?: Tag[] | Tag
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface DrinkSubscriptionWhereInput {
  AND?: DrinkSubscriptionWhereInput[] | DrinkSubscriptionWhereInput
  OR?: DrinkSubscriptionWhereInput[] | DrinkSubscriptionWhereInput
  NOT?: DrinkSubscriptionWhereInput[] | DrinkSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DrinkWhereInput
}

export interface FoodSubscriptionWhereInput {
  AND?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  OR?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  NOT?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FoodWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface DrinkConnection {
  pageInfo: PageInfo
  edges: DrinkEdge[]
  aggregate: AggregateDrink
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface DrinkPreviousValues {
  name: String
  location?: String
  hours?: String
  tags: Tag[]
}

export interface Drink {
  name: String
  location?: String
  hours?: String
  tags: Tag[]
}

/*
 * An edge in a connection.

 */
export interface DrinkEdge {
  node: Drink
  cursor: String
}

export interface Food {
  name: String
  location?: String
  cuisine?: Cuisine
  hours?: String
  tags: Tag[]
}

/*
 * An edge in a connection.

 */
export interface FoodEdge {
  node: Food
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface FoodSubscriptionPayload {
  mutation: MutationType
  node?: Food
  updatedFields?: String[]
  previousValues?: FoodPreviousValues
}

export interface FoodPreviousValues {
  name: String
  location?: String
  cuisine?: Cuisine
  hours?: String
  tags: Tag[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface DrinkSubscriptionPayload {
  mutation: MutationType
  node?: Drink
  updatedFields?: String[]
  previousValues?: DrinkPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface FoodConnection {
  pageInfo: PageInfo
  edges: FoodEdge[]
  aggregate: AggregateFood
}

export interface AggregateFood {
  count: Int
}

export interface AggregateDrink {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number