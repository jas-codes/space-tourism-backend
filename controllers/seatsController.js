var SpaceFlightLogic = require('../Logic/spaceFlightLogic');
var SeatLogic = require('../Logic/seatLogic');

exports.updateAvailableSeats = async function (req, res) {
    var result = await SpaceFlightLogic.updateFlightSeats(req);
    res.send(result);
}

exports.getReservedSeats = async function (req, res) {
    res.send(await SeatLogic.getReservedSeatsByFlight(req.params.flightNumber));
}