var spaceshipLogic = require("../Logic/spaceshipLogic");

/* GET spaceshipListings listing. */
exports.spaceshipList = async function(req, res) {
  var result = await spaceshipLogic.getAllSpaceships();
  res.send(result);
};

exports.createSpaceship = async function(req, res) {
  var result = await spaceshipLogic.createSpaceship(req);
  res.send(result);
}
