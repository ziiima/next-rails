import { bookQuery } from '@/graphql/book/query'
import { signUp } from '@/graphql/user/mutation'
import { userQuery } from '@/graphql/user/query'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'

const typeDefs = loadSchemaSync('src/graphql/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
})

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      ...bookQuery,
      ...userQuery,
    },
    Mutation: {
      signUp,
    },
  },
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }
