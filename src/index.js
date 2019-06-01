require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO use express ;middleware to handle jwt user cookies
// TODO use express ;middleware to handle user ath

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONT_END_URL,
    },
    playground: '/playground',
  },
  deets =>
    console.log(`Server is running on port http://localhost:${deets.port}`)
);
