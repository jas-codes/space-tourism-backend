var spaceshipLogic = require("../Logic/spaceshipLogic");

/* GET spaceshipListings listing. */
exports.spaceshipList = async function(req, res) {
  var result = await spaceshipLogic.getAllSpaceships();
  res.send(result);
};
