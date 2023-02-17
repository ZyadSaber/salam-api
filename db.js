const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "144.24.209.19",
    // host: "127.0.0.1",
    // host: "192.168.1.250",
    database: "salam",
    password: "ZozSaber@0909010169",
    port: 5432,
});


module.exports = pool;