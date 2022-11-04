const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "http://144.24.209.19:9090/",
    database: "salam",
    password: "ZozSaber@0909010169",
    port: 5432,
});

module.exports = pool;