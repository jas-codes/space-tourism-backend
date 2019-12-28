var SpaceFlightRepo = require('../repositories/spaceFlightRepo');
var SpaceshipLogic = require('../Logic/spaceshipLogic');

var SpaceFlightVM = require('../models/flightVM');
var SpaceFlight = require('../models/flight');

//create a flight
function createSpaceFlight(req){
    return SpaceFlightRepo.createSpaceFlight(req);
}

//get all flights
function getAllSpaceFlights(){
    var flightsVMPromise = new Promise( async function(resolve, reject) {
        var flights = await SpaceFlightRepo.getSpaceFlights();

        var flightsVM = [];

        console.log(flights);
        flights.forEach( async function(flight) {
            shipId = flight.ship;
            ship = await SpaceshipLogic.getSpaceshipById(shipId);
            flightsVM.push(createSpaceFlightVM(ship, flight))
        });
        console.log(flightsVM);
        if(flightsVM.length > 0)
            resolve("flights retrieved");
        else {
            reject(Error("Error Combining Flights with ships"));
        }
    });

    return flightsVMPromise;
}

function createSpaceFlightVM(ship, flight){
    console.log('ship');
    console.log(ship);
    console.log('flight');
    console.log(flight.departureDate);

    var vm = new SpaceFlightVM(ship, flight.arrivalDate,
        flight.departureDate, flight.gate, flight.flightNumber, flight.leavingLocation);
    console.log(vm);
    return vm;
}

module.exports.createSpaceFlight = createSpaceFlight;
module.exports.getAllSpaceFlights = getAllSpaceFlights;

