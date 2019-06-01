const { forwardto } = require('prisma-binding');
// forwardto lets you just forward the original graphql request straight to the
// Prisma Server service. If you leave queries or mutations unchanged you can
// just forward the request like the  query below.
// queryname: forwardto('db')

// make sure there is a corresponding type definition for each query

const Query = {
  users: (parent, args, ctx, info) => ctx.db.query.users({}, info),
};

module.exports = Query;
