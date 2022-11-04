const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "puplic",
    password: "ZozSaber@0909010169",
    port: 5432,
});

module.exports = pool;