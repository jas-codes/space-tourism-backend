var Spaceship = require('./spaceship');

var SpaceFlightVM = function (spaceship, arrivalDate, departureDate, gate, flightNumber, leavingLocation){
    this.ship = spaceship,
    this.arrivalDate = arrivalDate,
    this.departureDate = departureDate,
    this.gate = gate,
    this.flightNumber = flightNumber,
    this.leavingLocation = leavingLocation
}

module.exports = SpaceFlightVM