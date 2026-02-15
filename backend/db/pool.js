const { Pool } = require("pg");
const { host, database, password } = require("pg/lib/defaults");

// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   database: "ecommerce2",
//   password: "Ahihonsou2808",
// });

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;
