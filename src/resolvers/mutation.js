const { forwardto } = require('prisma-binding');
// forwardto lets you just forward the original graphql request straight to the
// Prisma Server service.

// make sure there is a corresponding type definition for each mutation
const Mutation = {
  createUser: (_, args, ctx, info) =>
    ctx.db.mutation.createUser(
      {
        data: {
          ...args,
        },
      },
      info
    ),
};

module.exports = Mutation;
