require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT || 4532
});

console.log(`Connected to Postgres db: \"${pool.options.database}\"`);

module.exports.Pool = pool;