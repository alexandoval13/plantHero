require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  port: process.env.PORT || 4532
});

console.log('Connection to Postgres established');

module.exports.Pool = pool;