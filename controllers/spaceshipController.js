var spaceshipLogic = require("../Logic/spaceshipLogic");

/* GET spaceshipListings listing. */
exports.spaceshipList = async function(req, res) {
  var result = await spaceshipLogic.getAllSpaceships();
  res.send(result);
};

//Post create a spaceship
exports.createSpaceship = async function(req, res) {
  var result = await spaceshipLogic.createSpaceship(req);
  res.send(result);
}

//Get spacehsip by Id
exports.getSpaceshipById = async function(req, res) {
  res.send(await spaceshipLogic.getSpaceshipById(req.params.shipId));
}

exports.deleteSpaceship = async function(req, res) {
  res.send(await spaceshipLogic.deleteSpaceship(req.body.nameCode))
}
