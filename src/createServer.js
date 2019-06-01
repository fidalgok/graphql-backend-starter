const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');
const db = require('./db');

// create the graphql server
// This yoga server sits between the client and the prisma server
// it allows us to make custom resolvers and perform authentication
// and other stuff like that.

function createServer() {
  return new GraphQLServer({
    // the "public" facing graphql schema
    typeDefs: 'src/typeDefs.graphql',
    // resolvers for handling any custom backend functionality
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    // this just allows us to surface db querying functionality in
    // the yoga graphql resolvers.
    context: req => ({
      ...req,
      db,
    }),
  });
}

module.exports = createServer;
