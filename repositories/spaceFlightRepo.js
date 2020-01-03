var SpaceFlight = require("../models/flight");

async function getSpaceFlights() {
    return await SpaceFlight.find();
}

function createSpaceFlight(req) {
    var flight = new SpaceFlight({
        departureDate: req.body.departureDate,
        arrivalDate: req.body.arrivalDate,
        gate: req.body.gate,
        destination: req.body.destination,
        leavingLocation: req.body.leavingLocation,
        ship: req.body.shipId,
        flightNumber: req.body.flightNumber,
        availableSeats: req.body.availableSeats
    });
    flight.save(function (err) {
        if (err) return err
    });
    return 201;
}

function updateFlightSeats(req) {
    var query = { flightNumber: req.body.flightNumber };
    SpaceFlight.update(query, { availableSeats: req.body.availableSeats }, function (err, raw) {
        if (err) {
            console.log(err);
            return 500;
        }
    });
    return 200;
}

module.exports.updateFlightSeats = updateFlightSeats;
module.exports.getSpaceFlights = getSpaceFlights;
module.exports.createSpaceFlight = createSpaceFlight;