const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

var router = express.Router();
var appRoutes = require("./Server/routes/routes")(router);
var port = process.env.port || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", appRoutes);

require("./Server/routes/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Simple Postgres Node Express API Server"
  })
);

app.listen(port, function() {
  console.log("Running the Server on port " + port);
});
