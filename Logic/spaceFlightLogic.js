var SpaceFlightRepo = require('../repositories/spaceFlightRepo');
var SpaceshipLogic = require('../Logic/spaceshipLogic');

var SpaceFlightVM = require('../models/flightVM');
var SpaceFlight = require('../models/flight');

//create a flight
function createSpaceFlight(req){
    return SpaceFlightRepo.createSpaceFlight(req);
}

//get all flights
async function getAllSpaceFlights(){
    flights = await SpaceFlightRepo.getSpaceFlights();

    var flightsVM = [];

    flights.forEach(function(flight) {
        shipId = flight.ship;
        ship = SpaceshipLogic.getSpaceshipById(shipId);
        flightsVM.push(createSpaceFlightVM(ship, flight))
    });
    
    return flightsVM;
}

function createSpaceFlightVM(ship, flight){
    var vm = new SpaceFlightVM(ship, flight.arrivalDate,
        flight.departureDate, flight.gate, flight.flightNumber, flight.leavingLocation);
    return vm;
}

module.exports.createSpaceFlight = createSpaceFlight;
module.exports.getAllSpaceFlights = getAllSpaceFlights;

