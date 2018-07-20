import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    businesses: <T = Business[]>(args: { where?: BusinessWhereInput, orderBy?: BusinessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cuisineses: <T = Cuisines[]>(args: { where?: CuisinesWhereInput, orderBy?: CuisinesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagses: <T = Tags[]>(args: { where?: TagsWhereInput, orderBy?: TagsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    business: <T = Business | null>(args: { where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    businessesConnection: <T = BusinessConnection>(args: { where?: BusinessWhereInput, orderBy?: BusinessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cuisinesesConnection: <T = CuisinesConnection>(args: { where?: CuisinesWhereInput, orderBy?: CuisinesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsesConnection: <T = TagsConnection>(args: { where?: TagsWhereInput, orderBy?: TagsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBusiness: <T = Business>(args: { data: BusinessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCuisines: <T = Cuisines>(args: { data: CuisinesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTags: <T = Tags>(args: { data: TagsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBusiness: <T = Business | null>(args: { data: BusinessUpdateInput, where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBusiness: <T = Business | null>(args: { where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBusiness: <T = Business>(args: { where: BusinessWhereUniqueInput, create: BusinessCreateInput, update: BusinessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBusinesses: <T = BatchPayload>(args: { data: BusinessUpdateInput, where?: BusinessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCuisineses: <T = BatchPayload>(args: { data: CuisinesUpdateInput, where?: CuisinesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTagses: <T = BatchPayload>(args: { data: TagsUpdateInput, where?: TagsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBusinesses: <T = BatchPayload>(args: { where?: BusinessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCuisineses: <T = BatchPayload>(args: { where?: CuisinesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTagses: <T = BatchPayload>(args: { where?: TagsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    business: <T = BusinessSubscriptionPayload | null>(args: { where?: BusinessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cuisines: <T = CuisinesSubscriptionPayload | null>(args: { where?: CuisinesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tags: <T = TagsSubscriptionPayload | null>(args: { where?: TagsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Business: (where?: BusinessWhereInput) => Promise<boolean>
  Cuisines: (where?: CuisinesWhereInput) => Promise<boolean>
  Tags: (where?: TagsWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateBusiness {
  count: Int!
}

type AggregateCuisines {
  count: Int!
}

type AggregateTags {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Business implements Node {
  id: ID!
  zomatoID: String
  name: String!
  url: String
  address: String
  locality: String
  city: String
  latitude: String
  longitude: String
  price: PriceRange
  hours: String
  cuisine(where: CuisinesWhereInput): Cuisines
  tags(where: TagsWhereInput): Tags
  type: BusinessType
  comment: String
}

"""A connection to a list of items."""
type BusinessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BusinessEdge]!
  aggregate: AggregateBusiness!
}

input BusinessCreateInput {
  zomatoID: String
  name: String!
  url: String
  address: String
  locality: String
  city: String
  latitude: String
  longitude: String
  price: PriceRange
  hours: String
  type: BusinessType
  comment: String
  cuisine: CuisinesCreateOneInput
  tags: TagsCreateOneInput
}

"""An edge in a connection."""
type BusinessEdge {
  """The item at the end of the edge."""
  node: Business!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BusinessOrderByInput {
  id_ASC
  id_DESC
  zomatoID_ASC
  zomatoID_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  address_ASC
  address_DESC
  locality_ASC
  locality_DESC
  city_ASC
  city_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  price_ASC
  price_DESC
  hours_ASC
  hours_DESC
  type_ASC
  type_DESC
  comment_ASC
  comment_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BusinessPreviousValues {
  id: ID!
  zomatoID: String
  name: String!
  url: String
  address: String
  locality: String
  city: String
  latitude: String
  longitude: String
  price: PriceRange
  hours: String
  type: BusinessType
  comment: String
}

type BusinessSubscriptionPayload {
  mutation: MutationType!
  node: Business
  updatedFields: [String!]
  previousValues: BusinessPreviousValues
}

input BusinessSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BusinessSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BusinessSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BusinessSubscriptionWhereInput!]

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
  node: BusinessWhereInput
}

enum BusinessType {
  BAR
  RESTAURANT
}

input BusinessUpdateInput {
  zomatoID: String
  name: String
  url: String
  address: String
  locality: String
  city: String
  latitude: String
  longitude: String
  price: PriceRange
  hours: String
  type: BusinessType
  comment: String
  cuisine: CuisinesUpdateOneInput
  tags: TagsUpdateOneInput
}

input BusinessWhereInput {
  """Logical AND on all given filters."""
  AND: [BusinessWhereInput!]

  """Logical OR on all given filters."""
  OR: [BusinessWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BusinessWhereInput!]
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
  zomatoID: String

  """All values that are not equal to given value."""
  zomatoID_not: String

  """All values that are contained in given list."""
  zomatoID_in: [String!]

  """All values that are not contained in given list."""
  zomatoID_not_in: [String!]

  """All values less than the given value."""
  zomatoID_lt: String

  """All values less than or equal the given value."""
  zomatoID_lte: String

  """All values greater than the given value."""
  zomatoID_gt: String

  """All values greater than or equal the given value."""
  zomatoID_gte: String

  """All values containing the given string."""
  zomatoID_contains: String

  """All values not containing the given string."""
  zomatoID_not_contains: String

  """All values starting with the given string."""
  zomatoID_starts_with: String

  """All values not starting with the given string."""
  zomatoID_not_starts_with: String

  """All values ending with the given string."""
  zomatoID_ends_with: String

  """All values not ending with the given string."""
  zomatoID_not_ends_with: String
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
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  locality: String

  """All values that are not equal to given value."""
  locality_not: String

  """All values that are contained in given list."""
  locality_in: [String!]

  """All values that are not contained in given list."""
  locality_not_in: [String!]

  """All values less than the given value."""
  locality_lt: String

  """All values less than or equal the given value."""
  locality_lte: String

  """All values greater than the given value."""
  locality_gt: String

  """All values greater than or equal the given value."""
  locality_gte: String

  """All values containing the given string."""
  locality_contains: String

  """All values not containing the given string."""
  locality_not_contains: String

  """All values starting with the given string."""
  locality_starts_with: String

  """All values not starting with the given string."""
  locality_not_starts_with: String

  """All values ending with the given string."""
  locality_ends_with: String

  """All values not ending with the given string."""
  locality_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  latitude: String

  """All values that are not equal to given value."""
  latitude_not: String

  """All values that are contained in given list."""
  latitude_in: [String!]

  """All values that are not contained in given list."""
  latitude_not_in: [String!]

  """All values less than the given value."""
  latitude_lt: String

  """All values less than or equal the given value."""
  latitude_lte: String

  """All values greater than the given value."""
  latitude_gt: String

  """All values greater than or equal the given value."""
  latitude_gte: String

  """All values containing the given string."""
  latitude_contains: String

  """All values not containing the given string."""
  latitude_not_contains: String

  """All values starting with the given string."""
  latitude_starts_with: String

  """All values not starting with the given string."""
  latitude_not_starts_with: String

  """All values ending with the given string."""
  latitude_ends_with: String

  """All values not ending with the given string."""
  latitude_not_ends_with: String
  longitude: String

  """All values that are not equal to given value."""
  longitude_not: String

  """All values that are contained in given list."""
  longitude_in: [String!]

  """All values that are not contained in given list."""
  longitude_not_in: [String!]

  """All values less than the given value."""
  longitude_lt: String

  """All values less than or equal the given value."""
  longitude_lte: String

  """All values greater than the given value."""
  longitude_gt: String

  """All values greater than or equal the given value."""
  longitude_gte: String

  """All values containing the given string."""
  longitude_contains: String

  """All values not containing the given string."""
  longitude_not_contains: String

  """All values starting with the given string."""
  longitude_starts_with: String

  """All values not starting with the given string."""
  longitude_not_starts_with: String

  """All values ending with the given string."""
  longitude_ends_with: String

  """All values not ending with the given string."""
  longitude_not_ends_with: String
  price: PriceRange

  """All values that are not equal to given value."""
  price_not: PriceRange

  """All values that are contained in given list."""
  price_in: [PriceRange!]

  """All values that are not contained in given list."""
  price_not_in: [PriceRange!]
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
  type: BusinessType

  """All values that are not equal to given value."""
  type_not: BusinessType

  """All values that are contained in given list."""
  type_in: [BusinessType!]

  """All values that are not contained in given list."""
  type_not_in: [BusinessType!]
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  cuisine: CuisinesWhereInput
  tags: TagsWhereInput
}

input BusinessWhereUniqueInput {
  id: ID
}

type Cuisines {
  ITALIAN: Boolean!
  ASIAN: Boolean!
  INDIAN: Boolean!
  MISCELLANEOUS: Boolean!
  LOCAL: Boolean!
  VEGAN: Boolean!
  VEGETARIAN: Boolean!
  MEDITERRANEAN: Boolean!
  MEXICAN: Boolean!
  AMERICAN: Boolean!
}

"""A connection to a list of items."""
type CuisinesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CuisinesEdge]!
  aggregate: AggregateCuisines!
}

input CuisinesCreateInput {
  ITALIAN: Boolean
  ASIAN: Boolean
  INDIAN: Boolean
  MISCELLANEOUS: Boolean
  LOCAL: Boolean
  VEGAN: Boolean
  VEGETARIAN: Boolean
  MEDITERRANEAN: Boolean
  MEXICAN: Boolean
  AMERICAN: Boolean
}

input CuisinesCreateOneInput {
  create: CuisinesCreateInput
}

"""An edge in a connection."""
type CuisinesEdge {
  """The item at the end of the edge."""
  node: Cuisines!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CuisinesOrderByInput {
  ITALIAN_ASC
  ITALIAN_DESC
  ASIAN_ASC
  ASIAN_DESC
  INDIAN_ASC
  INDIAN_DESC
  MISCELLANEOUS_ASC
  MISCELLANEOUS_DESC
  LOCAL_ASC
  LOCAL_DESC
  VEGAN_ASC
  VEGAN_DESC
  VEGETARIAN_ASC
  VEGETARIAN_DESC
  MEDITERRANEAN_ASC
  MEDITERRANEAN_DESC
  MEXICAN_ASC
  MEXICAN_DESC
  AMERICAN_ASC
  AMERICAN_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CuisinesPreviousValues {
  ITALIAN: Boolean!
  ASIAN: Boolean!
  INDIAN: Boolean!
  MISCELLANEOUS: Boolean!
  LOCAL: Boolean!
  VEGAN: Boolean!
  VEGETARIAN: Boolean!
  MEDITERRANEAN: Boolean!
  MEXICAN: Boolean!
  AMERICAN: Boolean!
}

type CuisinesSubscriptionPayload {
  mutation: MutationType!
  node: Cuisines
  updatedFields: [String!]
  previousValues: CuisinesPreviousValues
}

input CuisinesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CuisinesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CuisinesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CuisinesSubscriptionWhereInput!]

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
  node: CuisinesWhereInput
}

input CuisinesUpdateDataInput {
  ITALIAN: Boolean
  ASIAN: Boolean
  INDIAN: Boolean
  MISCELLANEOUS: Boolean
  LOCAL: Boolean
  VEGAN: Boolean
  VEGETARIAN: Boolean
  MEDITERRANEAN: Boolean
  MEXICAN: Boolean
  AMERICAN: Boolean
}

input CuisinesUpdateInput {
  ITALIAN: Boolean
  ASIAN: Boolean
  INDIAN: Boolean
  MISCELLANEOUS: Boolean
  LOCAL: Boolean
  VEGAN: Boolean
  VEGETARIAN: Boolean
  MEDITERRANEAN: Boolean
  MEXICAN: Boolean
  AMERICAN: Boolean
}

input CuisinesUpdateOneInput {
  create: CuisinesCreateInput
  disconnect: Boolean
  delete: Boolean
  update: CuisinesUpdateDataInput
  upsert: CuisinesUpsertNestedInput
}

input CuisinesUpsertNestedInput {
  update: CuisinesUpdateDataInput!
  create: CuisinesCreateInput!
}

input CuisinesWhereInput {
  """Logical AND on all given filters."""
  AND: [CuisinesWhereInput!]

  """Logical OR on all given filters."""
  OR: [CuisinesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CuisinesWhereInput!]
  ITALIAN: Boolean

  """All values that are not equal to given value."""
  ITALIAN_not: Boolean
  ASIAN: Boolean

  """All values that are not equal to given value."""
  ASIAN_not: Boolean
  INDIAN: Boolean

  """All values that are not equal to given value."""
  INDIAN_not: Boolean
  MISCELLANEOUS: Boolean

  """All values that are not equal to given value."""
  MISCELLANEOUS_not: Boolean
  LOCAL: Boolean

  """All values that are not equal to given value."""
  LOCAL_not: Boolean
  VEGAN: Boolean

  """All values that are not equal to given value."""
  VEGAN_not: Boolean
  VEGETARIAN: Boolean

  """All values that are not equal to given value."""
  VEGETARIAN_not: Boolean
  MEDITERRANEAN: Boolean

  """All values that are not equal to given value."""
  MEDITERRANEAN_not: Boolean
  MEXICAN: Boolean

  """All values that are not equal to given value."""
  MEXICAN_not: Boolean
  AMERICAN: Boolean

  """All values that are not equal to given value."""
  AMERICAN_not: Boolean
  _MagicalBackRelation_BusinessToCuisines_every: BusinessWhereInput
  _MagicalBackRelation_BusinessToCuisines_some: BusinessWhereInput
  _MagicalBackRelation_BusinessToCuisines_none: BusinessWhereInput
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createBusiness(data: BusinessCreateInput!): Business!
  createCuisines(data: CuisinesCreateInput!): Cuisines!
  createTags(data: TagsCreateInput!): Tags!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBusiness(data: BusinessUpdateInput!, where: BusinessWhereUniqueInput!): Business
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBusiness(where: BusinessWhereUniqueInput!): Business
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBusiness(where: BusinessWhereUniqueInput!, create: BusinessCreateInput!, update: BusinessUpdateInput!): Business!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyBusinesses(data: BusinessUpdateInput!, where: BusinessWhereInput): BatchPayload!
  updateManyCuisineses(data: CuisinesUpdateInput!, where: CuisinesWhereInput): BatchPayload!
  updateManyTagses(data: TagsUpdateInput!, where: TagsWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBusinesses(where: BusinessWhereInput): BatchPayload!
  deleteManyCuisineses(where: CuisinesWhereInput): BatchPayload!
  deleteManyTagses(where: TagsWhereInput): BatchPayload!
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

enum PriceRange {
  ONE
  TWO
  THREE
  FOUR
  FIVE
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  businesses(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business]!
  cuisineses(where: CuisinesWhereInput, orderBy: CuisinesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cuisines]!
  tagses(where: TagsWhereInput, orderBy: TagsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tags]!
  user(where: UserWhereUniqueInput!): User
  business(where: BusinessWhereUniqueInput!): Business
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  businessesConnection(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessConnection!
  cuisinesesConnection(where: CuisinesWhereInput, orderBy: CuisinesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CuisinesConnection!
  tagsesConnection(where: TagsWhereInput, orderBy: TagsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagsConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  business(where: BusinessSubscriptionWhereInput): BusinessSubscriptionPayload
  cuisines(where: CuisinesSubscriptionWhereInput): CuisinesSubscriptionPayload
  tags(where: TagsSubscriptionWhereInput): TagsSubscriptionPayload
}

type Tags {
  BRUNCH: Boolean!
  LUNCH: Boolean!
  DINNER: Boolean!
  DRUNCHIES: Boolean!
  CRAFTCOCKTAILS: Boolean!
  INSTAWORTHY: Boolean!
  FANCYAF: Boolean!
  TECHNORAVE: Boolean!
  DANCEALLNIGHT: Boolean!
  LIVEBAND: Boolean!
  ROOFTOP: Boolean!
  GRUNGY: Boolean!
  TREATYOSELF: Boolean!
}

"""A connection to a list of items."""
type TagsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagsEdge]!
  aggregate: AggregateTags!
}

input TagsCreateInput {
  BRUNCH: Boolean
  LUNCH: Boolean
  DINNER: Boolean
  DRUNCHIES: Boolean
  CRAFTCOCKTAILS: Boolean
  INSTAWORTHY: Boolean
  FANCYAF: Boolean
  TECHNORAVE: Boolean
  DANCEALLNIGHT: Boolean
  LIVEBAND: Boolean
  ROOFTOP: Boolean
  GRUNGY: Boolean
  TREATYOSELF: Boolean
}

input TagsCreateOneInput {
  create: TagsCreateInput
}

"""An edge in a connection."""
type TagsEdge {
  """The item at the end of the edge."""
  node: Tags!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagsOrderByInput {
  BRUNCH_ASC
  BRUNCH_DESC
  LUNCH_ASC
  LUNCH_DESC
  DINNER_ASC
  DINNER_DESC
  DRUNCHIES_ASC
  DRUNCHIES_DESC
  CRAFTCOCKTAILS_ASC
  CRAFTCOCKTAILS_DESC
  INSTAWORTHY_ASC
  INSTAWORTHY_DESC
  FANCYAF_ASC
  FANCYAF_DESC
  TECHNORAVE_ASC
  TECHNORAVE_DESC
  DANCEALLNIGHT_ASC
  DANCEALLNIGHT_DESC
  LIVEBAND_ASC
  LIVEBAND_DESC
  ROOFTOP_ASC
  ROOFTOP_DESC
  GRUNGY_ASC
  GRUNGY_DESC
  TREATYOSELF_ASC
  TREATYOSELF_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagsPreviousValues {
  BRUNCH: Boolean!
  LUNCH: Boolean!
  DINNER: Boolean!
  DRUNCHIES: Boolean!
  CRAFTCOCKTAILS: Boolean!
  INSTAWORTHY: Boolean!
  FANCYAF: Boolean!
  TECHNORAVE: Boolean!
  DANCEALLNIGHT: Boolean!
  LIVEBAND: Boolean!
  ROOFTOP: Boolean!
  GRUNGY: Boolean!
  TREATYOSELF: Boolean!
}

type TagsSubscriptionPayload {
  mutation: MutationType!
  node: Tags
  updatedFields: [String!]
  previousValues: TagsPreviousValues
}

input TagsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagsSubscriptionWhereInput!]

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
  node: TagsWhereInput
}

input TagsUpdateDataInput {
  BRUNCH: Boolean
  LUNCH: Boolean
  DINNER: Boolean
  DRUNCHIES: Boolean
  CRAFTCOCKTAILS: Boolean
  INSTAWORTHY: Boolean
  FANCYAF: Boolean
  TECHNORAVE: Boolean
  DANCEALLNIGHT: Boolean
  LIVEBAND: Boolean
  ROOFTOP: Boolean
  GRUNGY: Boolean
  TREATYOSELF: Boolean
}

input TagsUpdateInput {
  BRUNCH: Boolean
  LUNCH: Boolean
  DINNER: Boolean
  DRUNCHIES: Boolean
  CRAFTCOCKTAILS: Boolean
  INSTAWORTHY: Boolean
  FANCYAF: Boolean
  TECHNORAVE: Boolean
  DANCEALLNIGHT: Boolean
  LIVEBAND: Boolean
  ROOFTOP: Boolean
  GRUNGY: Boolean
  TREATYOSELF: Boolean
}

input TagsUpdateOneInput {
  create: TagsCreateInput
  disconnect: Boolean
  delete: Boolean
  update: TagsUpdateDataInput
  upsert: TagsUpsertNestedInput
}

input TagsUpsertNestedInput {
  update: TagsUpdateDataInput!
  create: TagsCreateInput!
}

input TagsWhereInput {
  """Logical AND on all given filters."""
  AND: [TagsWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagsWhereInput!]
  BRUNCH: Boolean

  """All values that are not equal to given value."""
  BRUNCH_not: Boolean
  LUNCH: Boolean

  """All values that are not equal to given value."""
  LUNCH_not: Boolean
  DINNER: Boolean

  """All values that are not equal to given value."""
  DINNER_not: Boolean
  DRUNCHIES: Boolean

  """All values that are not equal to given value."""
  DRUNCHIES_not: Boolean
  CRAFTCOCKTAILS: Boolean

  """All values that are not equal to given value."""
  CRAFTCOCKTAILS_not: Boolean
  INSTAWORTHY: Boolean

  """All values that are not equal to given value."""
  INSTAWORTHY_not: Boolean
  FANCYAF: Boolean

  """All values that are not equal to given value."""
  FANCYAF_not: Boolean
  TECHNORAVE: Boolean

  """All values that are not equal to given value."""
  TECHNORAVE_not: Boolean
  DANCEALLNIGHT: Boolean

  """All values that are not equal to given value."""
  DANCEALLNIGHT_not: Boolean
  LIVEBAND: Boolean

  """All values that are not equal to given value."""
  LIVEBAND_not: Boolean
  ROOFTOP: Boolean

  """All values that are not equal to given value."""
  ROOFTOP_not: Boolean
  GRUNGY: Boolean

  """All values that are not equal to given value."""
  GRUNGY_not: Boolean
  TREATYOSELF: Boolean

  """All values that are not equal to given value."""
  TREATYOSELF_not: Boolean
  _MagicalBackRelation_BusinessToTags_every: BusinessWhereInput
  _MagicalBackRelation_BusinessToTags_some: BusinessWhereInput
  _MagicalBackRelation_BusinessToTags_none: BusinessWhereInput
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

export type PriceRange =   'ONE' |
  'TWO' |
  'THREE' |
  'FOUR' |
  'FIVE'

export type BusinessType =   'BAR' |
  'RESTAURANT'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type BusinessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'zomatoID_ASC' |
  'zomatoID_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC' |
  'address_ASC' |
  'address_DESC' |
  'locality_ASC' |
  'locality_DESC' |
  'city_ASC' |
  'city_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'longitude_ASC' |
  'longitude_DESC' |
  'price_ASC' |
  'price_DESC' |
  'hours_ASC' |
  'hours_DESC' |
  'type_ASC' |
  'type_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CuisinesOrderByInput =   'ITALIAN_ASC' |
  'ITALIAN_DESC' |
  'ASIAN_ASC' |
  'ASIAN_DESC' |
  'INDIAN_ASC' |
  'INDIAN_DESC' |
  'MISCELLANEOUS_ASC' |
  'MISCELLANEOUS_DESC' |
  'LOCAL_ASC' |
  'LOCAL_DESC' |
  'VEGAN_ASC' |
  'VEGAN_DESC' |
  'VEGETARIAN_ASC' |
  'VEGETARIAN_DESC' |
  'MEDITERRANEAN_ASC' |
  'MEDITERRANEAN_DESC' |
  'MEXICAN_ASC' |
  'MEXICAN_DESC' |
  'AMERICAN_ASC' |
  'AMERICAN_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type TagsOrderByInput =   'BRUNCH_ASC' |
  'BRUNCH_DESC' |
  'LUNCH_ASC' |
  'LUNCH_DESC' |
  'DINNER_ASC' |
  'DINNER_DESC' |
  'DRUNCHIES_ASC' |
  'DRUNCHIES_DESC' |
  'CRAFTCOCKTAILS_ASC' |
  'CRAFTCOCKTAILS_DESC' |
  'INSTAWORTHY_ASC' |
  'INSTAWORTHY_DESC' |
  'FANCYAF_ASC' |
  'FANCYAF_DESC' |
  'TECHNORAVE_ASC' |
  'TECHNORAVE_DESC' |
  'DANCEALLNIGHT_ASC' |
  'DANCEALLNIGHT_DESC' |
  'LIVEBAND_ASC' |
  'LIVEBAND_DESC' |
  'ROOFTOP_ASC' |
  'ROOFTOP_DESC' |
  'GRUNGY_ASC' |
  'GRUNGY_DESC' |
  'TREATYOSELF_ASC' |
  'TREATYOSELF_DESC' |
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

export interface TagsUpdateDataInput {
  BRUNCH?: Boolean
  LUNCH?: Boolean
  DINNER?: Boolean
  DRUNCHIES?: Boolean
  CRAFTCOCKTAILS?: Boolean
  INSTAWORTHY?: Boolean
  FANCYAF?: Boolean
  TECHNORAVE?: Boolean
  DANCEALLNIGHT?: Boolean
  LIVEBAND?: Boolean
  ROOFTOP?: Boolean
  GRUNGY?: Boolean
  TREATYOSELF?: Boolean
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

export interface TagsUpdateOneInput {
  create?: TagsCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TagsUpdateDataInput
  upsert?: TagsUpsertNestedInput
}

export interface BusinessWhereInput {
  AND?: BusinessWhereInput[] | BusinessWhereInput
  OR?: BusinessWhereInput[] | BusinessWhereInput
  NOT?: BusinessWhereInput[] | BusinessWhereInput
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
  zomatoID?: String
  zomatoID_not?: String
  zomatoID_in?: String[] | String
  zomatoID_not_in?: String[] | String
  zomatoID_lt?: String
  zomatoID_lte?: String
  zomatoID_gt?: String
  zomatoID_gte?: String
  zomatoID_contains?: String
  zomatoID_not_contains?: String
  zomatoID_starts_with?: String
  zomatoID_not_starts_with?: String
  zomatoID_ends_with?: String
  zomatoID_not_ends_with?: String
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
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  locality?: String
  locality_not?: String
  locality_in?: String[] | String
  locality_not_in?: String[] | String
  locality_lt?: String
  locality_lte?: String
  locality_gt?: String
  locality_gte?: String
  locality_contains?: String
  locality_not_contains?: String
  locality_starts_with?: String
  locality_not_starts_with?: String
  locality_ends_with?: String
  locality_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  latitude?: String
  latitude_not?: String
  latitude_in?: String[] | String
  latitude_not_in?: String[] | String
  latitude_lt?: String
  latitude_lte?: String
  latitude_gt?: String
  latitude_gte?: String
  latitude_contains?: String
  latitude_not_contains?: String
  latitude_starts_with?: String
  latitude_not_starts_with?: String
  latitude_ends_with?: String
  latitude_not_ends_with?: String
  longitude?: String
  longitude_not?: String
  longitude_in?: String[] | String
  longitude_not_in?: String[] | String
  longitude_lt?: String
  longitude_lte?: String
  longitude_gt?: String
  longitude_gte?: String
  longitude_contains?: String
  longitude_not_contains?: String
  longitude_starts_with?: String
  longitude_not_starts_with?: String
  longitude_ends_with?: String
  longitude_not_ends_with?: String
  price?: PriceRange
  price_not?: PriceRange
  price_in?: PriceRange[] | PriceRange
  price_not_in?: PriceRange[] | PriceRange
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
  type?: BusinessType
  type_not?: BusinessType
  type_in?: BusinessType[] | BusinessType
  type_not_in?: BusinessType[] | BusinessType
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  cuisine?: CuisinesWhereInput
  tags?: TagsWhereInput
}

export interface CuisinesUpsertNestedInput {
  update: CuisinesUpdateDataInput
  create: CuisinesCreateInput
}

export interface BusinessSubscriptionWhereInput {
  AND?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  OR?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  NOT?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BusinessWhereInput
}

export interface CuisinesUpdateDataInput {
  ITALIAN?: Boolean
  ASIAN?: Boolean
  INDIAN?: Boolean
  MISCELLANEOUS?: Boolean
  LOCAL?: Boolean
  VEGAN?: Boolean
  VEGETARIAN?: Boolean
  MEDITERRANEAN?: Boolean
  MEXICAN?: Boolean
  AMERICAN?: Boolean
}

export interface TagsUpdateInput {
  BRUNCH?: Boolean
  LUNCH?: Boolean
  DINNER?: Boolean
  DRUNCHIES?: Boolean
  CRAFTCOCKTAILS?: Boolean
  INSTAWORTHY?: Boolean
  FANCYAF?: Boolean
  TECHNORAVE?: Boolean
  DANCEALLNIGHT?: Boolean
  LIVEBAND?: Boolean
  ROOFTOP?: Boolean
  GRUNGY?: Boolean
  TREATYOSELF?: Boolean
}

export interface CuisinesUpdateOneInput {
  create?: CuisinesCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CuisinesUpdateDataInput
  upsert?: CuisinesUpsertNestedInput
}

export interface CuisinesSubscriptionWhereInput {
  AND?: CuisinesSubscriptionWhereInput[] | CuisinesSubscriptionWhereInput
  OR?: CuisinesSubscriptionWhereInput[] | CuisinesSubscriptionWhereInput
  NOT?: CuisinesSubscriptionWhereInput[] | CuisinesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CuisinesWhereInput
}

export interface BusinessUpdateInput {
  zomatoID?: String
  name?: String
  url?: String
  address?: String
  locality?: String
  city?: String
  latitude?: String
  longitude?: String
  price?: PriceRange
  hours?: String
  type?: BusinessType
  comment?: String
  cuisine?: CuisinesUpdateOneInput
  tags?: TagsUpdateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface TagsUpsertNestedInput {
  update: TagsUpdateDataInput
  create: TagsCreateInput
}

export interface TagsCreateInput {
  BRUNCH?: Boolean
  LUNCH?: Boolean
  DINNER?: Boolean
  DRUNCHIES?: Boolean
  CRAFTCOCKTAILS?: Boolean
  INSTAWORTHY?: Boolean
  FANCYAF?: Boolean
  TECHNORAVE?: Boolean
  DANCEALLNIGHT?: Boolean
  LIVEBAND?: Boolean
  ROOFTOP?: Boolean
  GRUNGY?: Boolean
  TREATYOSELF?: Boolean
}

export interface TagsWhereInput {
  AND?: TagsWhereInput[] | TagsWhereInput
  OR?: TagsWhereInput[] | TagsWhereInput
  NOT?: TagsWhereInput[] | TagsWhereInput
  BRUNCH?: Boolean
  BRUNCH_not?: Boolean
  LUNCH?: Boolean
  LUNCH_not?: Boolean
  DINNER?: Boolean
  DINNER_not?: Boolean
  DRUNCHIES?: Boolean
  DRUNCHIES_not?: Boolean
  CRAFTCOCKTAILS?: Boolean
  CRAFTCOCKTAILS_not?: Boolean
  INSTAWORTHY?: Boolean
  INSTAWORTHY_not?: Boolean
  FANCYAF?: Boolean
  FANCYAF_not?: Boolean
  TECHNORAVE?: Boolean
  TECHNORAVE_not?: Boolean
  DANCEALLNIGHT?: Boolean
  DANCEALLNIGHT_not?: Boolean
  LIVEBAND?: Boolean
  LIVEBAND_not?: Boolean
  ROOFTOP?: Boolean
  ROOFTOP_not?: Boolean
  GRUNGY?: Boolean
  GRUNGY_not?: Boolean
  TREATYOSELF?: Boolean
  TREATYOSELF_not?: Boolean
  _MagicalBackRelation_BusinessToTags_every?: BusinessWhereInput
  _MagicalBackRelation_BusinessToTags_some?: BusinessWhereInput
  _MagicalBackRelation_BusinessToTags_none?: BusinessWhereInput
}

export interface BusinessCreateInput {
  zomatoID?: String
  name: String
  url?: String
  address?: String
  locality?: String
  city?: String
  latitude?: String
  longitude?: String
  price?: PriceRange
  hours?: String
  type?: BusinessType
  comment?: String
  cuisine?: CuisinesCreateOneInput
  tags?: TagsCreateOneInput
}

export interface CuisinesCreateOneInput {
  create?: CuisinesCreateInput
}

export interface CuisinesCreateInput {
  ITALIAN?: Boolean
  ASIAN?: Boolean
  INDIAN?: Boolean
  MISCELLANEOUS?: Boolean
  LOCAL?: Boolean
  VEGAN?: Boolean
  VEGETARIAN?: Boolean
  MEDITERRANEAN?: Boolean
  MEXICAN?: Boolean
  AMERICAN?: Boolean
}

export interface TagsCreateOneInput {
  create?: TagsCreateInput
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

export interface CuisinesWhereInput {
  AND?: CuisinesWhereInput[] | CuisinesWhereInput
  OR?: CuisinesWhereInput[] | CuisinesWhereInput
  NOT?: CuisinesWhereInput[] | CuisinesWhereInput
  ITALIAN?: Boolean
  ITALIAN_not?: Boolean
  ASIAN?: Boolean
  ASIAN_not?: Boolean
  INDIAN?: Boolean
  INDIAN_not?: Boolean
  MISCELLANEOUS?: Boolean
  MISCELLANEOUS_not?: Boolean
  LOCAL?: Boolean
  LOCAL_not?: Boolean
  VEGAN?: Boolean
  VEGAN_not?: Boolean
  VEGETARIAN?: Boolean
  VEGETARIAN_not?: Boolean
  MEDITERRANEAN?: Boolean
  MEDITERRANEAN_not?: Boolean
  MEXICAN?: Boolean
  MEXICAN_not?: Boolean
  AMERICAN?: Boolean
  AMERICAN_not?: Boolean
  _MagicalBackRelation_BusinessToCuisines_every?: BusinessWhereInput
  _MagicalBackRelation_BusinessToCuisines_some?: BusinessWhereInput
  _MagicalBackRelation_BusinessToCuisines_none?: BusinessWhereInput
}

export interface BusinessWhereUniqueInput {
  id?: ID_Input
}

export interface TagsSubscriptionWhereInput {
  AND?: TagsSubscriptionWhereInput[] | TagsSubscriptionWhereInput
  OR?: TagsSubscriptionWhereInput[] | TagsSubscriptionWhereInput
  NOT?: TagsSubscriptionWhereInput[] | TagsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagsWhereInput
}

export interface CuisinesUpdateInput {
  ITALIAN?: Boolean
  ASIAN?: Boolean
  INDIAN?: Boolean
  MISCELLANEOUS?: Boolean
  LOCAL?: Boolean
  VEGAN?: Boolean
  VEGETARIAN?: Boolean
  MEDITERRANEAN?: Boolean
  MEXICAN?: Boolean
  AMERICAN?: Boolean
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface TagsEdge {
  node: Tags
  cursor: String
}

export interface Tags {
  BRUNCH: Boolean
  LUNCH: Boolean
  DINNER: Boolean
  DRUNCHIES: Boolean
  CRAFTCOCKTAILS: Boolean
  INSTAWORTHY: Boolean
  FANCYAF: Boolean
  TECHNORAVE: Boolean
  DANCEALLNIGHT: Boolean
  LIVEBAND: Boolean
  ROOFTOP: Boolean
  GRUNGY: Boolean
  TREATYOSELF: Boolean
}

export interface TagsPreviousValues {
  BRUNCH: Boolean
  LUNCH: Boolean
  DINNER: Boolean
  DRUNCHIES: Boolean
  CRAFTCOCKTAILS: Boolean
  INSTAWORTHY: Boolean
  FANCYAF: Boolean
  TECHNORAVE: Boolean
  DANCEALLNIGHT: Boolean
  LIVEBAND: Boolean
  ROOFTOP: Boolean
  GRUNGY: Boolean
  TREATYOSELF: Boolean
}

export interface Cuisines {
  ITALIAN: Boolean
  ASIAN: Boolean
  INDIAN: Boolean
  MISCELLANEOUS: Boolean
  LOCAL: Boolean
  VEGAN: Boolean
  VEGETARIAN: Boolean
  MEDITERRANEAN: Boolean
  MEXICAN: Boolean
  AMERICAN: Boolean
}

export interface AggregateTags {
  count: Int
}

export interface Business extends Node {
  id: ID_Output
  zomatoID?: String
  name: String
  url?: String
  address?: String
  locality?: String
  city?: String
  latitude?: String
  longitude?: String
  price?: PriceRange
  hours?: String
  cuisine?: Cuisines
  tags?: Tags
  type?: BusinessType
  comment?: String
}

/*
 * A connection to a list of items.

 */
export interface TagsConnection {
  pageInfo: PageInfo
  edges: TagsEdge[]
  aggregate: AggregateTags
}

/*
 * An edge in a connection.

 */
export interface CuisinesEdge {
  node: Cuisines
  cursor: String
}

export interface AggregateBusiness {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BusinessConnection {
  pageInfo: PageInfo
  edges: BusinessEdge[]
  aggregate: AggregateBusiness
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
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

export interface CuisinesSubscriptionPayload {
  mutation: MutationType
  node?: Cuisines
  updatedFields?: String[]
  previousValues?: CuisinesPreviousValues
}

export interface BusinessSubscriptionPayload {
  mutation: MutationType
  node?: Business
  updatedFields?: String[]
  previousValues?: BusinessPreviousValues
}

export interface CuisinesPreviousValues {
  ITALIAN: Boolean
  ASIAN: Boolean
  INDIAN: Boolean
  MISCELLANEOUS: Boolean
  LOCAL: Boolean
  VEGAN: Boolean
  VEGETARIAN: Boolean
  MEDITERRANEAN: Boolean
  MEXICAN: Boolean
  AMERICAN: Boolean
}

export interface BusinessPreviousValues {
  id: ID_Output
  zomatoID?: String
  name: String
  url?: String
  address?: String
  locality?: String
  city?: String
  latitude?: String
  longitude?: String
  price?: PriceRange
  hours?: String
  type?: BusinessType
  comment?: String
}

export interface TagsSubscriptionPayload {
  mutation: MutationType
  node?: Tags
  updatedFields?: String[]
  previousValues?: TagsPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface AggregateCuisines {
  count: Int
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface BusinessEdge {
  node: Business
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface CuisinesConnection {
  pageInfo: PageInfo
  edges: CuisinesEdge[]
  aggregate: AggregateCuisines
}

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
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number