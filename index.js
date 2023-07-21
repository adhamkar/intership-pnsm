/*
const sql = require("mssql/msnodesqlv8");

const config = {
  user: "adhaam",
  password: "1234",
  server: "ADHAM\\SQLEXPRESS",
  database: "intership_project",
  options: {
    trustedConnection: true,
  },
};
sql.connect(config, function (err) {
  if (err) console.log(err);
  var request = new sql.Request();
  request.query("select * from csrs", function (err, records) {
    if (err) console.log(err);
    else console.log(records);
  });
});
*/

const app = require("./app");

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
