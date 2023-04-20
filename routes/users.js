var express = require("express");
var router = express.Router();
const db = require("../db");

/* GET users listing. */
router.get("/", async (req, res) => {
  const conn = await db.getConnection();
  const query = "SELECT * FROM Customer";
  const [result] = await conn.query(query);
  conn.release();
  res.send(result);
  // db.getConnection((err, conn) => {
  //   if (err) throw err;
  //   const query = "SELECT * FROM bamsaeng.Customer";
  //   // const query = `INSERT INTO Customer (customerNo, password, customerName, custoerId) VALUES (?,?,?,?);`
  //   conn.query(query, (err, result) => {
  //     if (err) throw err;
  //     conn.release();
  //     res.send(result);
  //   });
  // });
  // // connection.query("SELECT * FROM bamsaeng.Customer;", (error, rows) => {
  // //   if (error) throw error;
  // //   console.log("Customer info is: ", rows);
  // //   res.send(rows);
  // // });
});

module.exports = router;