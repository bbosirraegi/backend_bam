const config = require("./config/database.js");
const { createPool } = require("mysql2/promise");

const pool = createPool(config);


module.exports = pool;
