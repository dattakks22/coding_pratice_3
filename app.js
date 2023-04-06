let express = require("express");

let app = express();

app.get("/", (request, response) => {
  response.send("Express JS");
  console.log(response.send("Express JS"));
});

module.exports = app;
