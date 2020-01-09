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

async function updateFlightSeats(flightNumber, noOfSeats) {
    var query = { flightNumber: flightNumber };
    var flight = await SpaceFlight.findOne(query);
    var seats = parseInt(flight.availableSeats) - parseInt(noOfSeats);
    SpaceFlight.update(query, { availableSeats: seats.toString() }, function (err, raw) {
        if (err) {
            console.log("error:\n" +err);
            return 500;
        }
    });
    return 200;
}

async function deleteSpaceFlight(flightNumber) {
    return await SpaceFlight.deleteMany({flightNumber: flightNumber});
}

module.exports.deleteSpaceFlight = deleteSpaceFlight;
module.exports.updateFlightSeats = updateFlightSeats;
module.exports.getSpaceFlights = getSpaceFlights;
module.exports.createSpaceFlight = createSpaceFlight;