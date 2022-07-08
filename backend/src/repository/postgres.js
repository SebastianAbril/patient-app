const Pool = require('pg').Pool;

let ssl = false;

if (process.env.NODE_ENV === 'production') {
  ssl = {
    rejectUnauthorized: false
  };
}

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl
});

module.exports = { pool };
