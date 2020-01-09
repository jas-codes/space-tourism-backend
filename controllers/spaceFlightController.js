var spaceFlightLogic = require('../Logic/spaceFlightLogic');

exports.createSpaceFlight = async function(req, res) {
    var result = await spaceFlightLogic.createSpaceFlight(req);
    res.send(result);
}

exports.getAllSpaceFlights = async function(req, res) {
    res.send(await spaceFlightLogic.getAllSpaceFlights());
}

exports.deleteSpaceFlight = async function (req, res) {
    res.send(await spaceFlightLogic.deleteSpaceFlight(req.body.flightNumber));
}
