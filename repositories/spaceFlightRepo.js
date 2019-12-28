var SpaceFlight = require("../models/flight");

async function getSpaceFlights(){
    return await SpaceFlight.find();
}

function createSpaceFlight(req) {
    var flight = new SpaceFlight({
        depatureDate: req.body.depatureDate,
        arrivalDate: req.body.arrivalDate,
        gate: req.body.gate,
        destination: req.body.destination,
        leavingLocation: req.body.leavingLocation,
        ship: req.body.shipId,
        flightNumber: req.body.flightNumber
    })
    flight.save(function (err) {
        if (err) return err
    });
    return 201;
}

module.exports.getSpaceFlights = getSpaceFlights;
module.exports.createSpaceFlight = createSpaceFlight;