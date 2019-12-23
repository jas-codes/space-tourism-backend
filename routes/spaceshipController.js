const express = require("express");
const router = express.Router();
const app = express();

var spaceshipLogic = require("../Logic/spaceshipLogic.js");

app.use(express.static("resources"));

/* GET spaceshipListings listing. */
app.get('/listspaceships', function(req, res) {
  res.send(spaceshipLogic.getAllSpaceships());
});
