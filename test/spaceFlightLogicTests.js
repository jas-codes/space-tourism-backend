var assert = require('chai').assert;
var spaceFlightLogic = require('../Logic/spaceFlightLogic');
var Flight = require('../models/flight');
var Ship = require('../models/spaceship');
var FlightVM = require('../models/flightVM');

describe('Testing logic for spaceFlights', function() {

    var flight;
    var ship;

    this.beforeEach(function() {
        flight = new Flight({
            ship: "",
            arrivalDate: Date.now(),
            departureDate: Date.now(),
            gate: "02A",
            destination: "Moon South Base",
            flightNumber: "MUN001",
            leavingLocation: "Heathrow 3rd Spaceway"
        });

        ship = new Ship({
            shipId: "",
            nameCode: "Falcon 9",
            totalSeats: 40,
            fuelCapacity: 1400,
            maxSpeed: 2200,
            age: 15,
        });

        flightvm = new FlightVM(
            ship,
            flight.arrivalDate,
            flight.departureDate,
            flight.gate,
            flight.flightNumber,
            flight.leavingLocation,
            flight.destination
        );
    });

    it('should create a flightVM model', function(){
        var res = spaceFlightLogic.createSpaceFlightVM(ship,flight)
        assert.deepEqual(res, flightvm);
    });
})