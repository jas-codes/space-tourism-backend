var Seat = require('../models/seat');
var SeatRepo = require('../repositories/seatRepo');

async function getReservedSeatsByFlight(flightNumber){
    return await SeatRepo.getReservedSeatsByFlight(flightNumber);
}

module.exports.getReservedSeatsByFlight = getReservedSeatsByFlight;