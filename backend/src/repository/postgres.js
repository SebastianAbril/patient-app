const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    port: 54321,
    database: 'patient',
    user: 'demo',
    password: 'demo',
});

module.exports = { pool };