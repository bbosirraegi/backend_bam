var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const dbconfig = require("../config/database.js");
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set("port", process.env.PORT || 3306);

/* GET users listing. */
app.get("/", (req, res)=> {
  connection.query("SELECT * FROM bamsaeng.Customer;", (error, rows) => {
    if (error) throw error;
    console.log("Customer info is: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), ()=>{
  console.log("Express server listening on port " + app.get("port"))
})

module.exports = router;
