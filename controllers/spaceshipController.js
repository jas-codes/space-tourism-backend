var spaceshipLogic = require("../Logic/spaceshipLogic");

/* GET spaceshipListings listing. */
exports.spaceshipList = function(req, res) {
  res.send(spaceshipLogic.getAllSpaceships());
};
