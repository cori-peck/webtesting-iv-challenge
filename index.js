const server = require('./api/server.js');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const port = process.env.PORT || 5050;
server.listen(port, () => console.log(`*** Server is up and running on ${port} ***`));