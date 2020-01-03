var SpaceFlightLogic = require('../Logic/spaceFlightLogic');

exports.updateAvailableSeats = async function (req, res) {
    var result = await SpaceFlightLogic.updateFlightSeats(req);
    res.send(result);
}