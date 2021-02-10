require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 5432,
});

console.log(`Connected to Postgres db: \"${pool.options.database}\"`);

module.exports.pool = pool;
