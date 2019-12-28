var Spaceship = require('./spaceship');

var SpaceFlightVM = function (spaceship, arrivalDate, departureDate, gate, flightNumber, leavingLocation, destination){
    this.ship = spaceship,
    this.arrivalDate = arrivalDate,
    this.departureDate = departureDate,
    this.gate = gate,
    this.destination = destination,
    this.flightNumber = flightNumber,
    this.leavingLocation = leavingLocation
}

module.exports = SpaceFlightVM