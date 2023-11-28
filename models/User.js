const { Pool } = require('pg');
const config = require('../config/config');

// database pooling
const pool = new Pool({
  user: config.database.user,
  host: config.database.host,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port,
});

const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

pool.query(createUserTable, (err, res) => {
  if (err) console.error(err);
  else console.log('Table for users is ready');
});

module.exports = pool;
